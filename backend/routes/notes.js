const express= require('express');
const router=express.Router();
const fetchUser=require('../Middleware/fetchUser')
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


//ROUTE 1: get all notes of User  using: GET "api/notes/getallnotes Login required"
router.get('/getallnotes',fetchUser,async (req,res)=>{
    try {
        const notes = await Note.find({user: req.user.id})
    res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");

        
    }
    
});


//ROUTE 1: get all notes of User  using: GET "api/notes/addnote   Login required"
router.post('/addnote',fetchUser,[
    body('title','enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be at least 5 characters').isLength({ min: 5 })

],async (req,res)=>{
    try {
        const { title, description , tags  } =req.body
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const note= new Note({ title, description, tags, user: req.user.id});
        const savedNote = await note.save();
       
       res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");

        
    }
     //in case of error, send bad request and errors
    
})
module.exports = router;