require('dotenv').config();

const express = require('express');
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser")


// Database connection
const connectDb = require('./config/db');
const authRoute = require('./routes/auth.routes');
const adminRoute = require("./routes/admin.routes")
const enquiryRoute = require("./routes/enquiry.routes")
const CommentRoute = require("./routes/comment.routes")

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

// ALl routes
app.use("/api" , authRoute)
app.use("/api" , adminRoute)
app.use("/api" , enquiryRoute)
app.use("/api" , CommentRoute)

const Port = process.env.PORT || 5000;
connectDb();


// Page not persent
app.use("*" , (req,res) => { 
    res.status(404).json({message:"Page Not Found"});
})

// server run
app.listen(Port, ()=> {
    console.log(`Server is Running on Port no. ${Port}`)
})