import MainLayout from "component/layout/MainLayout";
import React from "react";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Complain from "screens/about/component/Complain";
import FAQ from "screens/about/component/FAQ";
import Information from "screens/about/component/Information";
import Privacy from "screens/about/component/Privacy";
import TermsConditions from "screens/about/component/TermsConditions";
import About from "screens/about/index";
import Award from "screens/award/index";
import Dashboard from "screens/dashboard/index";
import Order from "screens/order/index";
import Partners from "screens/partners/index";
import Payments from "screens/payment/index";
import Product from "screens/product/index";
import Team from "screens/team/index";
import { Navigate } from "../../node_modules/react-router-dom/dist/index";
import routeConstant from "./utils/routeConstant";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={routeConstant.ABOUT} element={<About />}>
            <Route path={routeConstant.TAB_COMPLAIN} element={<Complain />} />

            <Route path={routeConstant.TAB_FAQ} element={<FAQ />} />
            <Route
              path={routeConstant.TAB_INFORMATION}
              element={<Information />}
            />
            <Route path={routeConstant.TAB_PRIVACY} element={<Privacy />} />
            <Route
              path={routeConstant.TAB_TERMS}
              element={<TermsConditions />}
            />
          </Route>
          <Route path={routeConstant.AWARD} element={<Award />} />
          <Route path={routeConstant.DASHBOARD} element={<Dashboard />} />
          <Route path={routeConstant.ORDER} element={<Order />} />
          <Route path={routeConstant.PARTNERS} element={<Partners />} />
          <Route path={routeConstant.PAYMENT} element={<Payments />} />
          <Route path={routeConstant.PRODUCT} element={<Product />} />

          <Route path={routeConstant.TEAM} element={<Team />} />
          <Route path={routeConstant.ABOUT} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
