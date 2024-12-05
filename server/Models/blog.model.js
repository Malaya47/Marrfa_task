const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  domain: {
    type: String,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  avatarImage: {
    type: String,
  },
  date: {
    type: String,
  },
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
