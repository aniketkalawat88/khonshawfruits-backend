const mongoose = require("mongoose");

const EnquirySchema = mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    fruit:{
        type:String,
        required:true,
    }
},{timestamps:true})

const EnquiryModal = mongoose.model('enquiry', EnquirySchema);

module.exports = EnquiryModal;