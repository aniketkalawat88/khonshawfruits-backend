const express = require("express");
const { PostComment, GetComment, deleteComment, updateComment } = require("../controllers/comment.controller");

const router = express.Router();

router.post("/comment" , PostComment);
router.get("/comment" , GetComment);
router.delete("/comment/:id" , deleteComment);
router.put("/comment/:id" , updateComment);

module.exports = router