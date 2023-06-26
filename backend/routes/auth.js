const express= require('express');
const User= require('../models/User');
const { body, validationResult } = require('express-validator');

const router=express.Router();

router.post ('/createuser',[
    body('name').isLength({min:3}),
    
    body('email').isEmail(),
    body('password').isLength({min:8})
],async (req,res) => {
    //in case of error, send bad request and errors
    const result= validationResult(req);
    if (!result.isEmpty()) {
       return res.status(400).json({ errors: result.array() });
      }
      try {
        
      
      let user = await User.findOne({ email: req.body.email});
      if(user)
      {
        console.log("email already exists")
        return res.status(400).json({ error: "user already exists with this email" });
      }
     user = await User.create  ({
        name:req.body.name,

         email: req.body.email,
        password: req.body.password,
        });
        console.log("user created")
        
        
        // .then((user)=>res.json(user))
        // .catch(errors => res.json({ errors:'email is already existed, please try again'}));
    res.json({ "User": "user" });
} catch (error) {
    console.log(error.message);
    res.status(500).send("some error occurred")
        
}
      
   
})
module.exports = router;