import {
  AppBar,
  List,
  Zoom,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Badge,
  Tooltip,
  Button,
  IconButton,
} from "@material-ui/core";
import { ExpandLess, Notifications, Phone } from "@material-ui/icons";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { FaAmbulance, FaCity, FaListUl, FaUser } from "react-icons/fa";
import { BiListPlus } from "react-icons/bi";
import { AiOutlineUserAdd, AiOutlineLogout } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import ListItemButton from "@mui/material/ListItemButton";
import { FaHospitalAlt } from "react-icons/fa";
import Collapse from "@mui/material/Collapse";

import { SearchOff } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import style from "../../Landing/Landing.styles";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import MenuIcon from "@mui/icons-material/Menu";

import axios from "axios";
import { makeStyles } from "@mui/styles";
const drawerWidth = 240;

const myStyle = makeStyles((theme) => ({
  form_control: {
    height: "2rem",
    width: "95%",
    lineHeight: "40px",
    background: "transparent",
    border: "1px solid #d7dbda",
    fontSize: "14px",
    color: "#a09e9e",
    borderRadius: "10px",
    paddingLeft: "0 0 20px 0",
    "&:focus": {
      outline: "none",
    },
  },
}));
export const AdminNavbar = (props) => {
  // console.log("39 props-->",props);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <List>
        {["Add Ambulance", "All Ambulance", "Add Staff", "All Staff","notification","Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index==0?<BiListPlus size={30} />:index==1?<FaAmbulance size={28} />:index==2?<AiOutlineUserAdd size={30} />:index==3?<FaListUl size={25} />:index==4? <Notifications size={30} />:index==5?<AiOutlineLogout size={25} />:""}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = style();
  const myClass = myStyle();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openedItemId, setOpenedItemId] = React.useState(true);
  const [ambulanceDriver, setAmbulanceDriver] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [notifiction, setNotification] = useState([]);

  const open = Boolean(anchorEl);
  const [ambulance, setAmbulance] = useState([]);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    const token = Cookies.get("Admin");
    const decode = jwt_decode(token);
    setHospitalId(decode.data._id);
    // setNotification(props.notification)
    axios
      .get(`http://localhost:5000/adminList/${decode.data._id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          //  console.log("66-->",res.data.data.notification)
          setNotification(res.data.data.notification);
          setAmbulance(res.data.data.ambulance);
        }
      });
  }, [notifiction]);
  function logout(e) {
    const lData = Cookies.get("Admin");
    if (lData) {
      Cookies.remove("Admin");
      history.push("/admin-login");
      window.location.reload();
    }
  }

  const deliverAmbulance = (id, name, consumerId) => {
    if (ambulanceDriver == "") {
      alert("Select your driver");
      return;
    }
    console.log("_id-->", id);
    console.log("name-->", name);
    console.log("consumerId-->", consumerId);

    const token = Cookies.get("Admin");
    const detail = jwt_decode(token);
    console.log("detail-->", detail.data._id);
    const consumerDetail = {
      consumerId: consumerId,
      consumerName: name,
      driver: ambulanceDriver,
      hospitalId: detail.data._id,
      hospitalName: detail.data.hospitalName,
    };
    console.log("96-->", consumerDetail);

    axios
      .post("http://localhost:5000/ambulance-responce", consumerDetail)
      .then((res) => {
        if (res.data.isSuccess) {
          alert(res.data.message);
        }
      });
  };
  const handleClicks = (orgEvent) => {
    let clickedItemId = orgEvent.currentTarget.id;
    if (openedItemId === clickedItemId) {
      setOpenedItemId("");
    } else {
      setOpenedItemId(clickedItemId);
    }
    //setOpen(!open);
  };
  //   console.log("105-->",notifiction)
  const deleteNotification = (notificationId) => {
    const data = { id: notificationId, hospitalId: hospitalId };
    console.log(data);
    axios
      .post("http://localhost:5000/delete-notification", data)
      .then((res) => {
        if (res.data.isSuccess) {
          alert(res.data.message);
          window.location.reload(false);
          console.log(res.data);
        } else {
          alert("Something went wrong");
          window.location.reload(false);
          console.log(res.data);
        }
      });
  };
  //   console.log(ambulanceDriver)
  return (
    <AppBar position="fixed" className={classes.Appbar}>
      <Toolbar className={classes.toolbar}>
        {/* <div> */}
        <Typography variant="h6" className={classes.logo}>
          Medi-Help
        </Typography>
        {/* </div> */}
        <IconButton
          className={classes.menuIcon}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.box}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        </div>
        <div>
          <div className={classes.item}>
            <nav className="navbar navbar-expand-sm navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                  <Tooltip
                    title="Add Ambulance"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <Link
                      exact
                      to="/admin-dashboard/add-ambulance"
                      className="nav-link text-light"
                    >
                      <BiListPlus size={30} />
                    </Link>
                  </Tooltip>
                </li>
                <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                  <Tooltip
                    title="All Ambulance"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <Link
                      exact
                      to="/admin-dashboard/all-ambulance"
                      className="nav-link text-light"
                    >
                      <FaAmbulance size={30} />
                    </Link>
                  </Tooltip>
                </li>
                <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                  <Tooltip title="Add Staff" arrow TransitionComponent={Zoom}>
                    <Link
                      exact
                      to="/admin-dashboard/add-staff"
                      className="nav-link text-light"
                    >
                      <AiOutlineUserAdd size={30} />
                    </Link>
                  </Tooltip>
                </li>
                <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                  <Tooltip title="All Staff" arrow TransitionComponent={Zoom}>
                    <Link
                      exact
                      to="/admin-dashboard/all-staff"
                      className="nav-link text-light"
                    >
                      <FaListUl size={30} />
                    </Link>
                  </Tooltip>
                </li>
                <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                  <Badge
                    badgeContent={notifiction.length ? notifiction.length : 0}
                    color="secondary"
                  >
                    <p
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                      className="nav-link text-light"
                    >
                      <Notifications size={30} />
                    </p>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    >
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                      >
                        {notifiction.map((request) => {
                          return (
                            <>
                              <List>
                                <ListItemButton
                                  id={request._id}
                                  button
                                  onClick={handleClicks}
                                >
                                  <ListItemIcon>
                                    <FaUser />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={request.consumerName}
                                  />
                                  {openedItemId === `${request._id}` ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandMore />
                                  )}
                                </ListItemButton>
                                <Collapse
                                  in={openedItemId === `${request._id}`}
                                  key={request._id}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <List
                                    component="div"
                                    disablePadding
                                    key={request._id}
                                  >
                                    <ListItemButton sx={{ pl: 3 }}>
                                      <ListItemIcon>
                                        <Phone size={25} color="009688" />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={request.consumerContact}
                                      />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 3 }}>
                                      <select
                                        type="number"
                                        name="otp"
                                        value={ambulanceDriver}
                                        className={myClass.form_control}
                                        onChange={(e) =>
                                          setAmbulanceDriver(e.target.value)
                                        }
                                      >
                                        <option selected>
                                          Select Your Driver
                                        </option>
                                        {ambulance.map((name) => {
                                          return (
                                            <option value={name._id}>
                                              {name.driverName}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 3 }}>
                                      <Button
                                        variant="contained"
                                        style={{
                                          backgroundColor: "#009688",
                                          color: "#fafafa",
                                        }}
                                        size="small"
                                        onClick={() =>
                                          deliverAmbulance(
                                            request._id,
                                            request.consumerName,
                                            request.consumerId
                                          )
                                        }
                                      >
                                        Deliver
                                      </Button>
                                      &nbsp;&nbsp;&nbsp;
                                      <Button
                                        variant="contained"
                                        style={{
                                          backgroundColor: "#c62828",
                                          color: "#fafafa",
                                        }}
                                        size="small"
                                        onClick={() =>
                                          deleteNotification(request._id)
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </ListItemButton>
                                  </List>
                                </Collapse>
                              </List>
                            </>
                          );
                        })}
                      </List>
                    </Popover>
                  </Badge>
                </li>
                <li
                  className="nav-item ml-5 mr-3 mt-2 pl-4 pr-5"
                  onClick={logout}
                >
                  <AiOutlineLogout size={30} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={classes.buttons}></div>
      </Toolbar>
    </AppBar>
  );
};
// export default AdminNavbar
