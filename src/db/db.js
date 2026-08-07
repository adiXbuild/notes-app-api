const mongoose = require("mongoose");  // mongoose is a package, like express

async function connectdb(){
    await mongoose.connect("mongodb+srv://learn-backend:DoGsx4MEmHLpHN6I@cluster0.nz37bax.mongodb.net/halley/"); // here under the round braces we need to add the connection string copied from the compass...
    console.log("connected to database");
}

module.exports = connectdb;
