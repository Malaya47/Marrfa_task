import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import axios from "axios";
import Blogs from "./components/Blogs";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const filterHandler = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await axios.get(`http://localhost:3000/blogs`);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error(`error occured while getting data ${error}`);
      }
    }

    getBlogs();
  }, []);

  const blogsToDisplay = blogs.filter((blog) => {
    const searchResult = searchValue
      ? blog.title.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    const filterResult =
      filterValue === "all" ? true : blog.domain.includes(filterValue);
    return searchResult && filterResult;
  });

  return (
    <div className="bg-body-tertiary">
      <Header />
      {/* some hero image or content */}

      <HeroSection />

      {/* search bar section */}
      <section className="d-flex justify-content-center">
        <input
          onChange={searchHandler}
          value={searchValue}
          style={{ width: "50%" }}
          className="form-control"
          type="search"
          placeholder="Search with title"
          aria-label="Search"
        />
      </section>

      {/* Filter  section */}
      <section className="d-flex justify-content-center mt-4">
        <select
          onChange={filterHandler}
          style={{ width: "50%" }}
          className="form-select"
        >
          <option value="all" selected>
            Select from the dropdown to filter
          </option>
          <option value="Technology">Technology</option>
          <option value="Fashion">Fashion</option>
          <option value="Real Estate">Real Estate</option>
        </select>
      </section>

      {/* blogs section */}
      <section className="mt-5">
        <Blogs blogsToDisplay={blogsToDisplay} />
      </section>
    </div>
  );
}

export default App;
