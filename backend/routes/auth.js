const express= require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    let obj={
        a:'john doe',
        number:34
    }
    res.json(obj);
})
module.exports = router;