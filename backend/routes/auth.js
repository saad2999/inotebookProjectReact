const express= require('express');
const User= require('../models/User');
const { body, validationResult } = require('express-validator');

const router=express.Router();

router.post('/',[
    body('name').isLength({min:3}),
    
    body('email').isEmail(),
    body('password').isLength({min:8})
],(req,res)=>{
    const result= validationResult(req);
    if (!result.isEmpty()) {
       return res.status(400).json({ errors: result.array() });
      }
      User.create({name:req.body.name,
         email: req.body.email, password: req.body.password
        }).then((user)=>res.json(user))
        .catch(errors => res.json({ errors:'email is already existed, please try again'}));
    
      
   
})
module.exports = router;