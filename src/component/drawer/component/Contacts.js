import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import "../styles.css";
import AddIcon from "@mui/icons-material/Add";
import { ButtonIcon } from "component/styled/ButtonIcon";

function Contacts() {
  const [emails, setEmails] = useState([1]);
  const [contacts, setContacts] = useState([1]);
  return (
    <div className="form-container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "100%",
            boxSizing: "border-box",
          },
        }}
        noValidate
        autoComplete="off"
      >
        {emails.map((item, index) => {
          return (
            <Fragment key={index}>
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@elred.com"
              />
            </Fragment>
          );
        })}
        <ButtonIcon
          onClick={() => {
            const arr = [...emails];
            arr.push(Math.random());
            setEmails([...arr]);
          }}
          startIcon={<AddIcon />}
        >
          Add
        </ButtonIcon>
        {contacts.map((item, index) => {
          return (
            <Fragment key={index}>
              <label for="exampleInputEmail1">Contacts</label>
              <input
                type="email"
                className="form-control"
                placeholder="8787898009"
              />
            </Fragment>
          );
        })}
        <ButtonIcon
          onClick={() => {
            const arr = [...contacts];
            arr.push(Math.random());
            setContacts([...arr]);
          }}
          startIcon={<AddIcon />}
        >
          Add
        </ButtonIcon>
      </Box>
    </div>
  );
}

export default Contacts;
