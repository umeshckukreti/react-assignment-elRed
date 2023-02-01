import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useContextProvider } from "context/index";
import Address from "./component/Address";
import "./styles.css";
import Contacts from "./component/Contacts";

export default function RightDrawer() {
  const { openDrawer, setOpenDrawer, showNav, setShowNav } =
    useContextProvider();

  console.log(openDrawer);

  const toggleDrawer = () => {
    console.log(openDrawer);

    setOpenDrawer({ ...openDrawer, open: !openDrawer.open });
  };

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={openDrawer.open}
          onClose={() => {
            setOpenDrawer({ ...openDrawer, open: false });
          }}
          onOpen={() => {
            setOpenDrawer({ ...openDrawer, open: true });
          }}
        >
          <Box sx={{ maxWidth: 400 }} role="presentation">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    onClick={() => {
                      toggleDrawer();
                    }}
                  >
                    <KeyboardBackspaceIcon />
                  </ListItemIcon>
                  <ListItemText primary={openDrawer.type} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <div className="form-container">
              {openDrawer.type === "Contacts" ? <Contacts /> : <Address />}
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
