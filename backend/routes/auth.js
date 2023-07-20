const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "something$secretishere"
const router = express.Router();
const fetchUser=require('../Middleware/fetchUser')


//ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required

router.post('/createuser', [
    body('name').isLength({ min: 3 }),

    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    let success=false
    //in case of error, send bad request and errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({success: success, errors: result.array() });
    }
    try {


        let user = await User.findOne({ email: req.body.email });
        if (user) {
            console.log("email already exists")
            return res.status(400).json({ error: "user already exists with this email" });
        }
        const salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            user: {
              id: user.id
            }
          }
        const authToken = jwt.sign(data, JWT_SECRET);
        success=true



        // .then((user)=>res.json(user))
        // .catch(errors => res.json({ errors:'email is already existed, please try again'}));
        res.json({success, authToken });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");

    }


})
//ROUTE 2: verify  and login a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'enter a valid email address please').isEmail(),
    body('password', 'password can not be blank').exists()
    
], async (req, res) => {
    let success=false
    //in case of error, send bad request and errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    const {email, password}=req.body;
    try {


        let user = await User.findOne({email});
        if (!user) {
           
            return res.status(400).json({ success:success,error: "login with coorect credential" });
        }
        const passwordCompare=await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success:success, error: "login with coorect credential" });
        }
        const data = {
            user:{
                id:user.id
            }
        }
        success=true
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success:success, authToken:authToken });

    } catch (error){
        console.log(error.message);
        res.status(500).send("internal server error")

    }
})
//ROUTE 3: get  a User detail using: POST "/api/auth/getuser".  login required
router.post('/getuser', fetchUser,  async (req, res) => {

try {
    let userId=req.user.id;
    console.log(userId);
    const user = await User.findOne({_id:userId}).select("-password");
    console.log(user)
    res.send(user);
} catch (error) {
    
        res.status(500).send("internal server error")
}
});

module.exports = router;