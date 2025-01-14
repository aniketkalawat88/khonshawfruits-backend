const jwt = require('jsonwebtoken');

const adminAuth = (req ,res , next ) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    const token = authHeader.split(" ")[1];
    try{
        const verified = jwt.verify(token , process.env.JWT_SECRET_KEY)
        if(verified.role !== 'admin'){
            return res.status(403).json({message:"Not an Admin"});
        }
        req.user = verified;
        next();
    }catch(err){
        res.status(403).json({ message: 'Invalid Token' , tokenerror:err });
        console.log("Invalid Token" , err);
    }
}



module.exports = adminAuth;
