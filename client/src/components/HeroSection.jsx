import React from "react";

export const HeroSection = () => {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="First Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              <p className="fs-2 text-uppercase">
                Innovation happens when people are free to think, experiment and
                speculate.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 img-fluid"
              alt="Second Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5> */}
              <p className="fs-2 text-uppercase">
                The heart and soul of the company is creativity and innovation.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1529854140025-25995121f16f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 img-fluid"
              alt="Third Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5> */}
              <p className="fs-2 text-uppercase">
                Blogging is hard because of the grind required to stay
                interesting and relevant.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center mt-5">
        <p className="badge text-bg-dark py-2">Our blogs</p>
        <h2 className="mb-3 mt-2">Resources and insights</h2>
        <p>The latest industry news, fashion, technology, and resources</p>
      </div>
    </section>
  );
};
