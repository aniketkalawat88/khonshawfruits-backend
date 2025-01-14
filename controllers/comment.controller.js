const CommentModal = require("../models/comment.model");

const PostComment = async ( req, res ) => {
    const { name , country , description } = req.body;
    try{
        const comment = await new CommentModal({
            name : name,
            country : country,
            description:description,
        })
        await comment.save();
        res.status(201).json({message:"Data Submitted Succesfully" , data:comment })
    }
    catch(err){
        return res.status(500).json({ message: 'Server error', error:err });

    }
}

const GetComment = async (req ,res ) => {
    try{
        const AllData = await CommentModal.find({});
        return res.status(200).json({message :"All Commet Get Succesfully" , data: AllData})
    }
    catch(err){
        return res.status(500).json({ message: 'Server error', error:err });
    }
}

const deleteComment = async (req, res) => {
    const { id } = req.params; // Extract the ID from the request parameters
    try {
        // Find the comment by ID and delete it
        const deletedData = await CommentModal.findByIdAndDelete(id);
        
        if (!deletedData) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        return res.status(200).json({ message: 'Comment deleted successfully', data: deletedData });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err });
    }
};

const updateComment = async (req, res) => {
    const { id } = req.params;
    const { name, country, description } = req.body;

    try {
        const updatedData = await CommentModal.findByIdAndUpdate(
            id, 
            { name, country, description }, 
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        return res.status(200).json({ message: 'Comment updated successfully', data: updatedData });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err });
    }
};
    

module.exports = { PostComment , GetComment , deleteComment , updateComment };