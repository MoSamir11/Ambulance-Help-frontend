import { alpha, AppBar,InputBase, Drawer,List,Divider,Button,Zoom,Listener,ListItemText,ListItemIcon,Box, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip,Container } from '@material-ui/core'
import { Mail, Search, Notifications, Cancel, MenuOutlined } from '@material-ui/icons';
import { FaAmbulance ,FaListUl, FaUser} from 'react-icons/fa';
import { BiListPlus } from 'react-icons/bi';
import { AiOutlineUserAdd,AiOutlineLogout } from 'react-icons/ai';
import Popover from '@mui/material/Popover';
import ListItemButton from '@mui/material/ListItemButton';

import { SearchOff } from '@mui/icons-material';
import React,{ useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useHistory, Redirect} from "react-router-dom";
import style from '../../Landing/Landing.styles';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

import axios from 'axios';
export const AdminNavbar = () => {
    // const [open, setOpen] = useState(false)
    const classes = style();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const [notifiction,setNotification] = useState([]);
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    useEffect(()=>{
        const token = Cookies.get("Admin");
        const decode = jwt_decode(token);
        // console.log("47-->",decode.data._id);
        axios.get(`http://localhost:5000/adminList/${decode.data._id}`)
         .then((res)=>{
             if(res.data.isSuccess)
             {
                 console.log("52-->",res.data.data.notification)
                 setNotification(res.data.data.notification)
             }
        })
    },[]) 
    function logout(e){
        const lData = Cookies.get("Admin")
        if(lData){
            Cookies.remove('Admin');
            history.push("/admin-login");
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
                        <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                            <Tooltip title='Add Ambulance' arrow TransitionComponent={Zoom}>
                                <Link exact to='/admin-dashboard/add-ambulance' className="nav-link text-light"><BiListPlus size={30}/></Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                            <Tooltip title='All Ambulance' arrow TransitionComponent={Zoom}>
                                <Link exact to='/admin-dashboard/all-ambulance' className="nav-link text-light"><FaAmbulance size={30} /></Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                            <Tooltip title='Add Staff' arrow TransitionComponent={Zoom}>
                                <Link exact to='/admin-dashboard/add-staff' className="nav-link text-light"><AiOutlineUserAdd size={30}/></Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                            <Tooltip title='All Staff' arrow TransitionComponent={Zoom}>
                                <Link exact to='/admin-dashboard/all-staff' className="nav-link text-light"><FaListUl size={30}/></Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item ml-5 mr-3 pl-4 pr-5">
                                <Badge badgeContent={notifiction.length?notifiction.length:0} color="secondary" style={{position:'fixed'}}>
                                    <p aria-describedby={id} variant="contained" onClick={handleClick} className="nav-link text-light"><Notifications size={30}/></p>
                                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{   vertical: 'bottom',   horizontal: 'left', }}>
                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
                                            {
                                                notifiction.map((request)=>{
                                                    return(
                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                <FaUser /> 
                                                            </ListItemIcon>
                                                            <ListItemText primary={request.consumerName} />
                                                        </ListItemButton>
                                                    )
                                                })
                                            }
                                        </List>
                                    </Popover>
                                </Badge>
                        </li>
                        <li className="nav-item ml-5 mr-3 mt-2 pl-4 pr-5" onClick={logout}>
                            <AiOutlineLogout size={30}/>
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