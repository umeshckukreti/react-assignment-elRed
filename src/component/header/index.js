import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-container">
      <div className="container-fluid">
        <div className="row flex-grow-1">
          <div className="col-2">
            <div className="d-flex justify-content-center">
              <a className="navbar-brand" href="#">
                <img
                  src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
                  alt="logo"
                  height={39}
                />
              </a>
            </div>
          </div>
          <div className="col-10">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex flex-grow-1 ">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Checkout(200)
                </button>
                <div class="dropdown">
                  <a
                    href="#"
                    class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt=""
                      width="32"
                      height="32"
                      class="rounded-circle me-2"
                    />
                    <strong>Admin user</strong>
                  </a>
                  <ul
                    class="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser2"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
