import React from 'react';
import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { useState } from 'react';
// import styles from '../../Admin/Styles.styles';
import '../../.././App.css'
const style = makeStyles((theme) => ({
    container1: {
      width:'60%',
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        width:'100%',
      },
    },
    division:{
        paddingTop: theme.spacing(2)
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
}))

export const Home = () =>{
    const myClass = style();
    // const classes = styles();
    // const {img,form,item,container1,card1,form_control,label,division,button} = classes;

    const [name,setName] = useState('');
    useEffect(()=>{
        const token = localStorage.getItem("consumer");
        const decode = jwt_decode(token);
        console.log("24-->",decode.user.name)
        setName(decode.user.name);
    })
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
    }
    return(
        <>
            <Container className={myClass.container1}>
                <h4>Welcome, {name}</h4>
                <button className={myClass.btn} onClick={submit}>Book am ambulance</button>

            </Container>
        </>
    )
}