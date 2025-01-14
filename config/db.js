const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected Succesfully");
    } catch (err) {
        console.log("Database Error",err)
    }
}

module.exports = connectDb;