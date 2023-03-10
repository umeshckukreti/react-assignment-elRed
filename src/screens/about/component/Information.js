import React, { useEffect } from "react";
import Card from "./Card";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../about.css";

function Information() {
  useEffect(() => {
    console.log("information");
  }, []);

  return (
    <div className="container-fluide">
      <div className="row">
        <Card title="Contacts" Icon={AccountBoxIcon}>
          <div className="d-flex justify-space-between mb-2">
            <div className="d-flex flex-grow-1">
              <EmailIcon className="me-2" size={24} />
              <div className="d-flex flex-wrap">
                <span>salesteam@br.com</span>/<span>salesteam@br.com</span>
              </div>
            </div>
            <span className="more-icon">5+</span>
          </div>
          <div className="d-flex">
            <LocalPhoneIcon />
            <span className="ms-1">+91897865456</span>,
            <span className="ms-1">+91897865456</span>
          </div>
        </Card>

        <Card title="Address" Icon={AccountBoxIcon}>
          <span>C-1 / 351/ 4, GID Makarpura</span>
          <span>Varodora - 390010, Gujurat, India</span>
        </Card>
        <Card title="Hours of operations" Icon={AccountBoxIcon}>
          <span>Monday to Friday - 9:00 Am To 6:00Pm</span>
        </Card>
        <Card title="Social Media Links" Icon={AccountBoxIcon}>
          <div className="d-flex justify-content-around links-container-media my-3">
            <LanguageIcon className="pe-auto" />
            <InstagramIcon className="pe-auto" />
            <FacebookIcon className="pe-auto" />
            <TwitterIcon className="pe-auto" />
          </div>
        </Card>
        <Card title="Statement " Icon={AccountBoxIcon}>
          <span>demo@elred.com</span>
        </Card>
      </div>
    </div>
  );
}

export default Information;
