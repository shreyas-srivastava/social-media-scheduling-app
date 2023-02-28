const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: String,
  datetime: Date,
  platforms: [String],
});

module.exports=mongoose.model("Post", postSchema);
