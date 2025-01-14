const express = require("express");
const { PostEnquiry, GetEnquiry } = require("../controllers/enquiry.controller");

const router = express.Router();

router.post("/enquiry" , PostEnquiry);
router.get("/enquiry" , GetEnquiry);

module.exports = router