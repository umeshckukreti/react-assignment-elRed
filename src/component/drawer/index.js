import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function RightDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    setOpen(!open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
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
            <ListItemText primary={"Statement"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={() => {
            setOpen(true);
          }}
          onOpen={() => {
            setOpen(true);
          }}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
