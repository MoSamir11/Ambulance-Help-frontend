import { AppBar,List,Zoom,ListItemText,ListItemIcon, Toolbar, Typography, Badge, Tooltip, Button,} from '@material-ui/core'
import { ExpandLess,  Notifications, Phone } from '@material-ui/icons';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { FaAmbulance ,FaCity,FaListUl, FaUser} from 'react-icons/fa';
import { BiListPlus } from 'react-icons/bi';
import { AiOutlineUserAdd,AiOutlineLogout } from 'react-icons/ai';
import Popover from '@mui/material/Popover';
import ListItemButton from '@mui/material/ListItemButton';
import {  FaHospitalAlt } from 'react-icons/fa';
import Collapse from '@mui/material/Collapse';

import { SearchOff } from '@mui/icons-material';
import React,{ useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useHistory, Redirect} from "react-router-dom";
import style from '../../Landing/Landing.styles';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

import axios from 'axios';
import { makeStyles } from '@mui/styles';
const myStyle = makeStyles((theme)=>({
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
        "&:focus":{
          outline:"none",
        },
      },
}))
export const AdminNavbar = () => {
    // const [open, setOpen] = useState(false)
    const classes = style();
    const myClass = myStyle();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openedItemId, setOpenedItemId] = React.useState(true);
    const [ambulanceDriver,setAmbulanceDriver] = useState('')
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const [notifiction,setNotification] = useState([]);
      const open = Boolean(anchorEl);
      const [ambulance,setAmbulance] = useState([])
      const id = open ? 'simple-popover' : undefined;
    useEffect(()=>{
        const token = Cookies.get("Admin");
        const decode = jwt_decode(token);
        axios.get(`http://localhost:5000/adminList/${decode.data._id}`)
         .then((res)=>{
             if(res.data.isSuccess)
             {
                 console.log("52-->",res.data.data.notification)
                 setNotification(res.data.data.notification)
                 setAmbulance(res.data.data.ambulance)
             }
        })
    },[]) 
    function logout(e){
        const lData = Cookies.get("Admin")
        if(lData){
            Cookies.remove('Admin');
            history.push("/admin-login");
            window.location.reload()
        }
    }
    const handleClicks = orgEvent => {
        let clickedItemId = orgEvent.currentTarget.id;
        if (openedItemId === clickedItemId) {
          setOpenedItemId("");
        } else {
          setOpenedItemId(clickedItemId);
        }
        //setOpen(!open);
      };
      const deliverAmbulance = (id,name,consumerId)=>{
          console.log("_id-->",id);
          console.log("name-->",name);
          console.log("consumerId-->",consumerId);
          const consumerDetail = {driverName:name,consumerId:consumerId,driver:ambulanceDriver};
          console.log("93-->",consumerDetail);
          axios.post("http://localhost:5000/ambulance-responce",consumerDetail)
          .then(res=>{
              console.log("NULL")
          })
      }
      console.log(ambulanceDriver)
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
                                                        <>
                                                        <List>
                                                        <ListItemButton id={request._id} button onClick={handleClicks}>
                                                            <ListItemIcon>
                                                                <FaUser /> 
                                                            </ListItemIcon>
                                                            <ListItemText primary={request.consumerName} />
                                                            {openedItemId===`${request._id}` ?  <ExpandLess />:<ExpandMore /> }
                                                        </ListItemButton>
                                                        <Collapse in={openedItemId === `${request._id}`} key={request._id} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding key={request._id}>
                                                                <ListItemButton sx={{ pl: 3 }}>
                                                                    <ListItemIcon>
                                                                        <Phone size={25} color='009688' />
                                                                    </ListItemIcon> 
                                                                    <ListItemText primary={request.consumerContact} />
                                                                </ListItemButton>
                                                                <ListItemButton sx={{ pl: 3 }}>
                                                                    <select type="number" name="otp" value={ambulanceDriver} className={myClass.form_control} onChange={(e)=>setAmbulanceDriver(e.target.value)}>
                                                                        <option disabled>Select Your Driver</option>
                                                                        {
                                                                            ambulance.map(name=>{
                                                                                return(
                                                                                    <option value={name._id}>{name.driverName}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </ListItemButton>
                                                                <ListItemButton sx={{ pl: 3 }}>
                                                                    <Button variant="contained" style={{backgroundColor:'#009688',color:'#fafafa'}} size="small" onClick={()=>deliverAmbulance(request._id,request.consumerName,request.consumerId)}>Deliver</Button>
                                                                    &nbsp;&nbsp;&nbsp;<Button variant="contained" style={{backgroundColor:'#c62828',color:'#fafafa'}} size="small">Remove</Button>
                                                                </ListItemButton>
                                                            </List>
                                                        </Collapse>
                                                        </List>
                                                    </>
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