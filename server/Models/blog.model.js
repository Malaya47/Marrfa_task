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
  smallDescription: {
    type: String,
  },
  avatarImage: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
