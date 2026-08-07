const mongoose = require("mongoose");

const noteschema = new mongoose.schema({
    title : String,
    description : String,
})

const notemodel = mongoose.model("note", noteschema);

module.exports = notemodel;