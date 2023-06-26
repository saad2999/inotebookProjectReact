const jwt = require('jsonwebtoken');
const JWT_SECRET = "something$secretishere"

const fetchUser=(req, res, next)=>{
    const token=req.header('auth-token'); 
    if(!token)
    {
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    const data=jwt.verify(token, JWT_SECRET)
    req.user=data.user
    next();
}

module.exports = fetchUser