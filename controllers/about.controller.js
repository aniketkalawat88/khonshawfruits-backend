const AboutModal = require("../models/about.model");

const UpdateAbout = async ( req, res ) => {
    const { yearsOfExperience, title, description } = req.body;
    try{
        const content = await AboutModal.findOneAndUpdate({}, { yearsOfExperience, title, description }, { new: true, upsert: true });
        res.status(201).json({message:"Data Updated Succesfully" , data:content })
    }
    catch(err){
        return res.status(500).json({ message: 'Server error', error:err });
    }
}

const getAbout = async (req, res) => {
    try{
        const content = await AboutModal.findOne();
        res.status(201).json({message:"All Data Get Succesfully" , data:content })
    }
    catch(err){
        return res.status(500).json({ message: 'Server error', error:err });
    }
  };



module.exports = { UpdateAbout, getAbout };