const express = require('express');
const adminAuth = require('../middlewares/auth.middleware');
const { UpdateAbout, getAbout } = require('../controllers/about.controller');

const router = express.Router();

router.get('/admin' , adminAuth,(req,res) => {
    return res.status(200).json({message:`Welcome Admin`});
})
router.put('/about',UpdateAbout)

router.get('/about',getAbout)


module.exports = router;