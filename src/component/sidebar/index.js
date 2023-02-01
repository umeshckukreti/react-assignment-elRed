import routeConstant from "routing/utils/routeConstant";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

// const drawerWidth = 240;

function Sidebar() {
  const location = useLocation();
  return (
    <div className=" d-flex flex-column sidebar-container height-100 justify-content-between">
      <div className="d-flex justify-content-center align-items-baseline d-sm-flex d-none">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
            alt="logo"
            height={39}
          />
        </a>
        <h4 className="m-0">A. T. Link</h4>
      </div>
      <div className=" d-flex flex-column flex-shrink-0 p-3 ">
        <ul className="nav nav-pills flex-column mb-auto d-sm-none d-block">
          <li
            className="nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          >
            <Link
              to={routeConstant.DASHBOARD}
              className={
                !location.pathname.includes(routeConstant.DASHBOARD)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
              aria-current="page"
            >
              Dashboard
            </Link>
          </li>
          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.ORDER}
              className={
                !location.pathname.includes(routeConstant.ORDER)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Order
            </Link>
          </li>
          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.TEAM}
              className={
                !location.pathname.includes(routeConstant.TEAM)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Team Members
            </Link>
          </li>
          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.PARTNERS}
              className={
                !location.pathname.includes(routeConstant.PARTNERS)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Partners
            </Link>
          </li>
          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.PRODUCT}
              className={
                !location.pathname.includes(routeConstant.PRODUCT)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Product Listing
            </Link>
          </li>

          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.AWARD}
              className={
                !location.pathname.includes(routeConstant.AWARD)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Award & Honors
            </Link>
          </li>
          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.ABOUT}
              className={
                !location.pathname.includes(routeConstant.ABOUT)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              About us
            </Link>
          </li>

          <li data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <Link
              to={routeConstant.PAYMENT}
              className={
                !location.pathname.includes(routeConstant.PAYMENT)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Payment Info
            </Link>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto d-none d-sm-block">
          <li className="nav-item">
            <Link
              to={routeConstant.DASHBOARD}
              className={
                !location.pathname.includes(routeConstant.DASHBOARD)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
              aria-current="page"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={routeConstant.ORDER}
              className={
                !location.pathname.includes(routeConstant.ORDER)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Order
            </Link>
          </li>
          <li>
            <Link
              to={routeConstant.TEAM}
              className={
                !location.pathname.includes(routeConstant.TEAM)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Team Members
            </Link>
          </li>
          <li>
            <Link
              to={routeConstant.PARTNERS}
              className={
                !location.pathname.includes(routeConstant.PARTNERS)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to={routeConstant.PRODUCT}
              className={
                !location.pathname.includes(routeConstant.PRODUCT)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Product Listing
            </Link>
          </li>

          <li>
            <Link
              to={routeConstant.AWARD}
              className={
                !location.pathname.includes(routeConstant.AWARD)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Award & Honors
            </Link>
          </li>
          <li>
            <Link
              to={routeConstant.ABOUT}
              className={
                !location.pathname.includes(routeConstant.ABOUT)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              to={routeConstant.PAYMENT}
              className={
                !location.pathname.includes(routeConstant.PAYMENT)
                  ? "nav-link link-dark"
                  : "active-link nav-link"
              }
            >
              Payment Info
            </Link>
          </li>
        </ul>
      </div>
      <div className="card m-3 ">
        <div class="card-body d-flex flex-column justify-content-center">
          <p className="card-text">Our support team isat your disposal.</p>
          <a href="#" className="btn btn-primary">
            Get help
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
