import React from "react";

const Blogs = ({ blogsToDisplay }) => {
  return (
    <section className="container">
      <div className="row ms=0 me-0 gy-4">
        {blogsToDisplay.map((blog) => (
          <div key={blog._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              <img
                src={blog.blogImage}
                className="card-img-top"
                alt="blog-image"
              />
              <div className="card-body d-flex flex-column">
                <p className="text-info mb-1">{blog.domain}</p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.smallDescription}</p>
                <div className="mt-auto d-flex gap-2">
                  <div>
                    <img
                      className="rounded-circle img-fluid"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      src={blog.avatarImage}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <span className="fw-bold">{blog.author}</span>
                    <p className="text-secondary">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
