import React from 'react';
import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { useState } from 'react';
// import styles from '../../Admin/Styles.styles';
import { BounceLoader } from "react-spinners";

import Cookies from 'js-cookie'
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import '../../.././App.css'
import axios from 'axios';
import { FaCity } from 'react-icons/fa';
const style = makeStyles((theme) => ({
    container1: {
      width:'60%',
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        width:'100%',
      },
    },
    division:{
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    btn: {
        padding: "0.4rem",
        fontSize: 15,
        borderRadius: 10,
        backgroundColor: "#089bab",
        borderWidth: 2,
        border: "1px solid #017e7e",
        outline: 2,
        color: "#ffffff",
      },
    label: {
        color: "#3f414d",
        fontWeight: "normal",
        padding: "2% 0 1% 3%",
    },
    form_control: {
        height: "2rem",
        width: "30%",
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

export const Home = () =>{
    const myClass = style();
    // const classes = styles();
    // const {img,form,item,container1,card1,form_control,label,division,button} = classes;
  
    const [hospitalList,setHospitalList] = useState([])
    const [hospital,setHospital] = useState([]) 
    const [spinner,setSpinner] = useState(false)
    const [openedItemId, setOpenedItemId] = React.useState(true);
    const [city,setCity] = useState('');
    const [currcity,setCurrcity] = useState('') 
    const handleClick = orgEvent => {
    let clickedItemId = orgEvent.currentTarget.id;
    if (openedItemId === clickedItemId) {
      setOpenedItemId("");
    } else {
      setOpenedItemId(clickedItemId);
    }
    //setOpen(!open);
  };
  
    const [name,setName] = useState('');
    useEffect(()=>{
        const token = Cookies.get("consumer");
        const decode = jwt_decode(token);
        console.log("24-->",decode.user.name)
        setName(decode.user.name);
        axios.get("http://localhost:5000/all-admin")
        .then((res)=>{
            setHospital(res.data.data)
        })
    },[])
    const submit = () =>{
        
        let location = null;
        var latitude = null;
        var longitude = null;
            if (window.navigator && window.navigator.geolocation) {
                location = window.navigator.geolocation
            }
            if (location){
                location.getCurrentPosition(function (position) {
                latitude = position.coords.latitude;
                longitude= position.coords.longitude;
                var coOrdinates={
                    latitude:latitude,
                    longitude:longitude
                }
                console.log("59-->",coOrdinates)
            })
        }
        setSpinner(true)
        axios.get(`http://localhost:5000/hospital/${currcity}`)
        .then((res)=>{
            if(res.data.isSuccess)
            {
                console.log(res.data.data)
                setHospitalList(res.data.data)
                setSpinner(false)
            }else{
                console.log("Data not found")
            }
        })
    }
    console.log("city-->",currcity)
    return(
        <>
            <Container className={myClass.container1}>
                <h4>Welcome, {name}</h4>
                <div className={myClass.division}>
                    <label htmlFor="otp" className={myClass.label}>Select Your City: &nbsp;&nbsp;</label>
                    <select type="number" name="otp" value={currcity} className={myClass.form_control} onChange={(e)=>setCurrcity(e.target.value)}>
                    <option>Select Your City</option>
                    {
                        hospital.map((hospital)=>{
                            return(
                                <option>{hospital.address}</option>
                            )
                        })
                    }
                    </select>
                </div>
                <button className={myClass.btn} onClick={submit}>Book am ambulance</button>
                <ListSubheader component="div" id="nested-list-subheader">
                    Hospital List
                </ListSubheader>
                {spinner?<>
                <div className="text-center" style={{ marginTop: '3%', marginRight: '84%' }}><BounceLoader size={100} color="#089bab"/></div></>:<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
                    {
                        hospitalList.map(hospital=>(
                        //  return(
                             <>
                                <ListItemButton id={hospital._id} button onClick={handleClick}> 
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={hospital.hospitalName} />
                                        {openedItemId===`${hospital._id}` ?  <ExpandLess />:<ExpandMore /> }
                                </ListItemButton>
                                <Collapse in={openedItemId === `${hospital._id}`} timeout="auto" key={hospital._id} unmountOnExit>
                                    <List component="div" disablePadding key={hospital._id}>
                                      <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                          <FaCity />
                                        </ListItemIcon> 
                                        <ListItemText primary={hospital.address} />
                                      </ListItemButton>
                                    </List>
                                </Collapse>
                             </>
                        //  )  
                        ))
                    }
                </List>}
            </Container>
        </>
    )
}