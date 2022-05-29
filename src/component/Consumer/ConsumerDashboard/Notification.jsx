import { alpha, AppBar,InputBase, Drawer,Zoom,List,Divider,Button,Listener,ListItemText,ListItemIcon,Box, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip,Container } from '@material-ui/core'
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
import Popover from '@mui/material/Popover';
import ListItemButton from '@mui/material/ListItemButton';
import { ExpandLess,   Phone } from '@material-ui/icons';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { FaCity, FaUser} from 'react-icons/fa';
import axios from 'axios';

export const Notification = (props) =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    var allData=[];
    allData = props.notification;
    var isAllData = false;
    
    var sum = 0;
    console.log("props notification 28-->",props)
    for(var i in allData.notification)
    {
        sum++;
    }
    if(sum>0)
    {
        isAllData=true;
    }
    console.log("sum-->",sum);
    console.log("allData-->",allData)
    const [openedItemId, setOpenedItemId] = React.useState(true);
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
    console.log(" 58-->",isAllData)
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
     
    return(
        <>
            <Badge badgeContent={sum?sum:0} color="secondary" style={{position:'fixed'}}>
                <p aria-describedby={id} variant="contained" onClick={handleClick} className="nav-link text-light"><Notifications size={30}/></p>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{   vertical: 'bottom',   horizontal: 'left', }}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
                            {
                                isAllData?allData.notification.map((responce)=>{
                                    return(
                                            <>
                                                <ListItemButton id={responce._id} onClick={handleClicks} key={responce._id}>
                                                    <ListItemIcon>
                                                                <FaHospital size={25} color='009688' />
                                                                </ListItemIcon> 
                                                                <ListItemText primary={responce.hospitalName} />
                                                    {openedItemId===`${responce._id}` ?  <ExpandLess />:<ExpandMore /> }
                                                    </ListItemButton>
                                                    <Collapse in={openedItemId === `${responce._id}`} key={responce._id} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding key={responce._id}>
                                                        <ListItemButton sx={{ pl: 3 }}>
                                                                <ListItemIcon>
                                                                    <DriveEta style={{color:'#009688'}} />
                                                                    </ListItemIcon>
                                                                <ListItemText primary={responce.driverName} /> 
                                                            </ListItemButton>
                                                            <ListItemButton sx={{ pl: 3 }}>
                                                                <ListItemIcon>
                                                                    <Phone size={25} style={{color:'#009688'}} />
                                                                </ListItemIcon> 
                                                                <ListItemText primary={responce.driverContact} />    
                                                            </ListItemButton>
                                                        </List>
                                                    </Collapse>
                                            </>
                                            )
                                        }):''
                            }
                        </List> 
                    </Popover>
                </Badge>
        </>
    )
}