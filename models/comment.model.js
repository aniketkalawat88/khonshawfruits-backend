const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
},{timestamps:true})

const CommentModal = mongoose.model('comment', commentSchema);

module.exports = CommentModal;