import { useEffect } from "react";
import RightDrawer from "component/drawer/index";
import Header from "component/header/index";
import Sidebar from "component/sidebar/index";
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import routeConstant from "routing/utils/routeConstant";
import "./layout.css";

function MainLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`${routeConstant.ABOUT}/${routeConstant.TAB_INFORMATION}`, {
      replace: true,
    });
  }, []);

  return (
    <div className="main-container">
      <Header />
      <RightDrawer />

      <div className="wrapper-container">
        <div className="container-fluid p-0 height-100 ">
          <div className="row layout-row-container height-100">
            <div className="col-lg-2 col-md-4 col-sm-5 d-sm-flex d-none layout-row-container height-100">
              <Sidebar />
            </div>
            <div className="col-lg-10 col-md-8 col-sm-7  col-12 d-sm-flex  sub-container height-100">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
