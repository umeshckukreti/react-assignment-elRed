import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import routeConstant from "routing/utils/routeConstant";
import "./about.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useNavigate } from "react-router-dom";

function About() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${routeConstant.ABOUT}/${routeConstant.TAB_INFORMATION}`, {
      replace: true,
    });
  }, []);

  return (
    <div>
      <h3>About Us</h3>
      <div className=" d-flex my-5">
        <img
          src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
          alt="logo"
          height={60}
        />
        <div className="mx-2">
          <h4>A. T. Links</h4>
          Digital lnks
        </div>

        <div className="px-3 ">
          <AcUnitIcon />
          <a className="verified-link px-1">Verified Company</a>
        </div>
      </div>

      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam
      </p>

      <ul className="nav">
        <li className="nav-item">
          <Link
            to={routeConstant.TAB_INFORMATION}
            className={
              pathname.includes(routeConstant.TAB_INFORMATION)
                ? "nav-link active-tab-link"
                : "nav-link"
            }
            aria-current="page"
          >
            Info
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={routeConstant.TAB_FAQ}
            className={
              pathname.includes(routeConstant.TAB_FAQ)
                ? "nav-link active-tab-link"
                : "nav-link"
            }
          >
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={routeConstant.TAB_COMPLAIN}
            className={
              pathname.includes(routeConstant.TAB_COMPLAIN)
                ? "nav-link active-tab-link"
                : "nav-link"
            }
          >
            Complaints & Feedback
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={routeConstant.TAB_PRIVACY}
            className={
              pathname.includes(routeConstant.TAB_PRIVACY)
                ? "nav-link active-tab-link"
                : "nav-link"
            }
            tabIndex="-1"
            aria-disabled="true"
          >
            Privacy Policy
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={routeConstant.TAB_TERMS}
            className={
              pathname.includes(routeConstant.TAB_TERMS)
                ? "nav-link active-tab-link"
                : "nav-link"
            }
            tabIndex="-1"
            aria-disabled="true"
          >
            Terms & Conditions
          </Link>
        </li>
      </ul>

      <div className="about-outlet-container my-3">
        <Outlet />
      </div>
    </div>
  );
}

export default About;
