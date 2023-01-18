import React from "react";
import EditIcon from "@mui/icons-material/Edit";
function Card({ title, Icon, children }) {
  return (
    <div className="card card-container ">
      <div className="card-body">
        <div className="d-flex  mb-3">
          <Icon className="me-2" size={24} />
          <div className="d-flex justify-content-between flex-grow-1">
            <h5 className="card-title">{title}</h5>
            <EditIcon />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Card;
