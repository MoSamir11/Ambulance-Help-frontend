
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import {List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export const AnExpand=()=> {
  const classes = useStyles();
  const [openedItemId, setOpenedItemId] = React.useState(true);

  const handleClick = orgEvent => {
    let clickedItemId = orgEvent.currentTarget.id;
    if (openedItemId === clickedItemId) {
      setOpenedItemId("");
    } else {
      setOpenedItemId(clickedItemId);
    }
    //setOpen(!open);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem id="item-administrators" button onClick={handleClick}>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Administrators" />
            {openedItemId === "item-administrators" ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </ListItem>
          <Collapse
            in={openedItemId === "item-administrators"}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="View" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add administrator" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem id="item-trainers" button onClick={handleClick}>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText primary="Trainers" />
            {openedItemId === "item-trainers" ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={openedItemId === "item-trainers"}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="View" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add trainer" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  );
}
