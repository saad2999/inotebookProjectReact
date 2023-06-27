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


//ROUTE 2: get all notes of User  using: GET "api/notes/addnote   Login required"
router.post('/addnote',fetchUser,[
    body('title','enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be at least 5 characters').isLength({ min: 5 })

],async (req,res)=>{
    try {
        const { title, description , tags  } =req.body
        const result = validationResult(req);
        const existingNote = await Note.findOne({ title, description, user: req.user.id });
    if (existingNote) {
      return res.status(400).json({ error: 'A note with the same title and description already exists' });
    }
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
//ROUTE 3: update existing note of User using: PUT "api/notes/updatenote/:id Login required"
router.put('/updatenote/:id', fetchUser, async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tags) newNote.tags = tags;

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized");
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    
    res.json(note); // Send the updated note as the response
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;