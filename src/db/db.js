const mongoose = require("mongoose");  // mongoose is a package, like express
import dotenv from "dotenv";
dotenv.config();

async function connectdb(){
    await mongoose.connect("process.env.Mongoose_url"); // here under the round braces we need to add the connection string copied from the compass...
    console.log("connected to database");
}

module.exports = connectdb;
