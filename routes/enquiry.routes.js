const express = require("express");
const { PostEnquiry, GetEnquiry } = require("../controllers/enquiry.controller");
const adminAuth = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/enquiry" , PostEnquiry);
router.get("/enquiry", adminAuth , GetEnquiry);

module.exports = router