const EnquiryModal = require("../models/enquiry.model");

const PostEnquiry = async ( req, res ) => {
    const { description , number , fruit } = req.body;
    try{
        const enquiry = await new EnquiryModal({
            description:description,
            number : number,
            fruit : fruit
        })
        await enquiry.save();
        res.status(201).json({message:"Data Submitted Succesfully" , data:enquiry })
    }
    catch(err){
        return res.status(500).json({ message: 'Server error', error:err });

    }
}

const GetEnquiry = async (req ,res ) => {
    try{
        const AllData = await EnquiryModal.find({});
        return res.status(200).json({message :"All Enquiry Get Succesfully" , data: AllData})
    }
    catch(err){
        return res.status(500).json({ message: 'Server error', error:err });
    }
    
}

module.exports = { PostEnquiry , GetEnquiry };