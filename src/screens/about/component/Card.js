import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useContextProvider } from "context/index";

function Card({ title, Icon, children }) {
  const { openDrawer, setOpenDrawer } = useContextProvider();

  return (
    <div className="  card-container  col-lg-4 col-md-6 col-12 mb-2">
      <div className="card heigh-100">
        <div className="card-body">
          <div className="d-flex  mb-3">
            <Icon className="me-2" size={24} />
            <div className="d-flex justify-content-between flex-grow-1">
              <h5 className="card-title">{title}</h5>
              <EditIcon
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
