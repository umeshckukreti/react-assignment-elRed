import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
function Address() {
  return (
    <div className=" d-flex flex-column justify-content-between">
      <div className="grow-1">
        <div className="card card-container ">
          <div className="card-body">
            <div className="d-flex  mb-2">
              <AccountBoxIcon />
              <div className="d-flex justify-content-between flex-grow-1">
                <h5 className="card-title px-1">Sales Team</h5>
                <div>
                  <EditIcon />
                  <DeleteIcon />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <EmailIcon />
              <span className="px-1">sales@elred.com</span>
            </div>

            <div>
              <LocalPhoneIcon />
              <span className="px-1">+91 8878799889</span>
              <span className="px-1"> / +91 8878799889</span>
            </div>
          </div>
        </div>

        <div className="card card-container my-3 ">
          <div className="card-body">
            <div className="d-flex  mb-2">
              <AccountBoxIcon />
              <div className="d-flex justify-content-between flex-grow-1">
                <h5 className="card-title px-1">Marketing Team</h5>
                <div>
                  <EditIcon />
                  <DeleteIcon />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <EmailIcon />
              <span className="px-1">sales@elred.com</span>
            </div>

            <div>
              <LocalPhoneIcon />
              <span className="px-1">+91 8878799889</span>
              <span className="px-1"> / +91 8878799889</span>
            </div>
          </div>
        </div>

        <div className="card card-container my-3 ">
          <div className="card-body">
            <div className="d-flex  mb-2">
              <AccountBoxIcon />
              <div className="d-flex justify-content-between flex-grow-1">
                <h5 className="card-title px-1">Marketing Team</h5>
                <div>
                  <EditIcon />
                  <DeleteIcon />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <EmailIcon />
              <span className="px-1">sales@elred.com</span>
            </div>

            <div>
              <LocalPhoneIcon />
              <span className="px-1">+91 8878799889</span>
              <span className="px-1"> / +91 8878799889</span>
            </div>
          </div>
        </div>

        <div className="card card-container my-3 ">
          <div className="card-body">
            <div className="d-flex  mb-2">
              <AccountBoxIcon />
              <div className="d-flex justify-content-between flex-grow-1">
                <h5 className="card-title px-1">Marketing Team</h5>
                <div>
                  <EditIcon />
                  <DeleteIcon />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <EmailIcon />
              <span className="px-1">sales@elred.com</span>
            </div>

            <div>
              <LocalPhoneIcon />
              <span className="px-1">+91 8878799889</span>
              <span className="px-1"> / +91 8878799889</span>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-danger w-100">
        Save
      </button>
    </div>
  );
}

export default Address;
