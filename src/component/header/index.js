import Sidebar from "component/sidebar/index";
import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContextProvider } from "context/index";

function Header() {
  const { showNav, setShowNav } = useContextProvider();

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
              class="navbar-toggler "
              type="button"
              onClick={() => {
                setShowNav(!showNav);
              }}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MenuIcon />
            </button>
          </div>

          <div className="col-lg-10 col-md-8 col-sm-7 sm-header-section position-static position-sm-absolute">
            <div
              className={(showNav ? "show" : "") + " collapse navbar-collapse"}
              id="navbarScroll"
            >
              <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll header-scroll d-flex flex-column flex-grow-1"
                // style=""
              >
                <div class="d-flex">
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
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admin
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>

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
