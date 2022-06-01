import { AppBar, Zoom, Toolbar, Typography, Tooltip } from '@material-ui/core';
import { Mail, Search, Notifications, Cancel, MenuOutlined, DriveEta } from '@material-ui/icons';
import { FaAmbulance ,FaHospital,FaListUl} from 'react-icons/fa';
import { BiListPlus } from 'react-icons/bi';
import { AiOutlineUserAdd,AiOutlineLogout,AiOutlineHome } from 'react-icons/ai';

import { SearchOff } from '@mui/icons-material';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useHistory, Redirect} from "react-router-dom";
import style from '../../Landing/Landing.styles';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { FaCity, FaUser} from 'react-icons/fa';
import { Notification } from './Notification';
import axios from 'axios';
export const ConsumerNavbar = (props) => {
    // console.log("20 props-->",props);
    // <Notification notifications={props.notification} />
    const classes = style();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [notification,setNotification] = useState([]);
    const notification = props.notification;
    const [openedItemId, setOpenedItemId] = React.useState(true);
    useEffect(()=>{
        const token = Cookies.get("consumer");
        const decode = jwt_decode(token);
        console.log("24-->",decode.user);
        // setNotification(decode.user.notification);
        var id = decode.user.id;
        axios.get(`http://localhost:5000/consumerList/${id}`)
        .then((res)=>{
            if(res.data.isSuccess){
            // console.log("36-->",res.data.data)
            // setNotification(res.data.data.notification);
            }
        })
    },[])
    // console.log("41-->",notification)
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicks = orgEvent => {
    let clickedItemId = orgEvent.currentTarget.id;
    if (openedItemId === clickedItemId) {
      setOpenedItemId("");
    } else {
      setOpenedItemId(clickedItemId);
    }
    // setOpen(!open);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
     
    function logout(){
        const lData = Cookies.get("consumer")
        if(lData){
            Cookies.remove('consumer');
            history.push("/consumer-login");
            window.location.reload();
        }
    }
    return (
        <AppBar position="fixed" className={classes.Appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    Medi-Help
                </Typography>
                <div>
                <div className={classes.item}>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <ul className="navbar-nav">
                                <li className="nav-item ml-5 mr-5 pt-2 pl-4 pr-5">
                                    <Tooltip title='Add Ambulance' arrow TransitionComponent={Zoom}>
                                        <Link exact to='/consumer-dashboard/home' className="nav-link text-light">Home</Link>
                                    </Tooltip>
                                </li>
                                <li className="nav-item ml-5 mr-5 pt-2 pl-4 pr-5">
                                    <Link exact to='/consumer-dashboard/aboutus' className="nav-link text-light">About Us</Link>
                                </li>
                                <li className="nav-item ml-5 mr-5 pt-2 pl-4 pr-5">
                                    <Link exact to='/consumer-dashboard/blog' className="nav-link text-light">Blog</Link>
                                </li>
                                <li className="nav-item ml-5 mr-3 pl-4 pr-5" style={{marginTop:'9px'}}> 
                                    <Notification notification={notification} />
                                </li>
                                <li className="nav-item ml-5 pl-4 pr-5" style={{paddingTop:3}}>
                                    <p className="nav-link text-light" onClick={logout}><AiOutlineLogout size={30}/></p>
                                </li>
                    </ul>
                    </nav>
                    </div>
                </div>
                <div className={classes.buttons}>
                    {/* <Link type="button" exact to="/admin-login" className={classes.btn}>Admin Login</Link>&nbsp;&nbsp;&nbsp;
                    <Link type="button" exact to="/consumer-login" className={classes.btn}>Consumer Login</Link> */}
                </div>
            </Toolbar>
        </AppBar>
    )
}