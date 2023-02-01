import Sidebar from "component/sidebar/index";
import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <nav class="navbar navbar-expand-sm  header-container">
      <div class="container-fluid">
        <div className="row flex-grow-1">
          <div className="col-lg-2 col-md-4 col-sm-5  justify-content-sm-center justify-content-between d-flex d-sm-flex">
            <a class="navbar-brand" href="#">
              <img
                src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
                alt="logo"
                height={39}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MenuIcon />
            </button>
          </div>

          <div className="col-lg-10 col-md-8 col-sm-7 sm-header-section position-static position-sm-absolute">
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll header-scroll"
                // style=""
              >
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                  <button
                    className="btn mx-2 btn-outline-success"
                    type="submit"
                  >
                    Checkout(200)
                  </button>
                </form>
                <li class="nav-item d-sm-none">
                  <Sidebar />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
