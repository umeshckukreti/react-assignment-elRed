import Header from "component/header/index";
import Sidebar from "component/sidebar/index";
import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

function MainLayout() {
  return (
    <div className="main-container">
      <Header />
      <div className="wrapper-container">
        <div className="container-fluid p-0 height-100 ">
          <div className="row layout-row-container height-100">
            <div className="col-2 layout-row-container height-100">
              <Sidebar />
            </div>
            <div className="col-10 sub-container height-100">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
