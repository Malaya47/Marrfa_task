import React from "react";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            Blogzz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Disabled</a>
              </li>
            </ul>
            {/* <div className="">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search with title"
                aria-label="Search"
              />
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
