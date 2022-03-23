import React from 'react';
import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { useState } from 'react';
// import styles from '../../Admin/Styles.styles';

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
    }
}))

export const AboutUs = () =>{
    const myClass = style();
    
    // const [name,setName] = useState('');
    // useEffect(()=>{
    //     const token = localStorage.getItem("consumer");
    //     const decode = jwt_decode(token);
    //     console.log("24-->",decode.user.name)
    //     setName(decode.user.name);
    // })
    return(
        <>
            <Container className={myClass.container1}>
                <h4>Welcome, to About Us Page</h4>

            </Container>
        </>
    )
}