const express = require("express");
const cors = require("cors");

const { intializeDatabase } = require("./db/db.connect");
const { Blog } = require("./Models/blog.model");

intializeDatabase();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello this is express server");
});

app.post("/postBlog", async (req, res) => {
  try {
    const blog = req.body;
    const newBlog = new Blog(blog);
    const saveBlog = await newBlog.save();

    if (saveBlog) {
      res.status(200).json({ message: "Blog saved successfully", saveBlog });
    } else {
      res.status(400).json({ message: "Blog not saved" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create a blog", error });
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ message: "Blogs found successfully", blogs });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while getting posts", error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
