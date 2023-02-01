import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useContextProvider } from "context/index";
import "../about.css";

function Card({ title, Icon, children }) {
  const { openDrawer, setOpenDrawer } = useContextProvider();

  return (
    <div className=" height-100 card-container  col-lg-4 col-md-6 col-12 mb-2">
      <div className="card height-100 hidden-md-down">
        <div className="card-body height-100">
          <div className="d-flex  mb-3">
            <Icon className="me-2" size={24} />
            <div className="d-flex justify-content-between flex-grow-1">
              <h5 className="card-title">{title}</h5>
              <EditIcon
                className="pe-auto"
                onClick={() => {
                  console.log("edit called");
                  setOpenDrawer({ type: title, open: true });
                }}
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
