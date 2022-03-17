import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useState,useEffect } from "react";
import styles from './Styles.styles.js';
import axios from "axios";

export const AdminLogin = () =>{
    const classes = styles();
    const {img,form,item,card1,form_control,label,division,button} = classes;

    const useStyles = makeStyles((theme) => ({
        container1: {
            padding: "20% 15% 15% 15% ",
            [theme.breakpoints.down("sm")]: {
              padding: "0 3% 3% 5% ",
            },
          },
    }))
    const [inputField,setInputField] = useState({
        hospitalName:'',
        email:'',
    })
    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setInputField((prevstate)=>({
            ...prevstate,
            [name]:value
        }))
    }
    const submit = () =>{
        const candidateData={
            email:inputField.email,
            password:inputField.password,
        }
        console.log("57-->",candidateData);
        axios.post('http://localhost:5000/admin-login',candidateData)
        .then((res)=>{
            if(res.data){
                console.log("57-->",res.data.token)
                alert(res.data.message)
              }else{
                alert(res.data.message)
              }
    }
    )
    }
    const myClass = useStyles();
    return(
        <>
            <Container className={myClass.container1}>
                <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign In</p>                                
                    <label htmlFor="name" className={classes.label}>Email</label>
                    <input type="text" name="email" className={classes.form_control} onChange={inputHandler} value={inputField.name}/>
                        <div className={classes.division}>
                            <label htmlFor="name" className={classes.label}>Password</label>
                            <input type="password" name="password" className={classes.form_control} onChange={inputHandler} value={inputField.name}/>
                        </div>
                        <div className={classes.division}>
                            <button className={classes.button} onClick={submit}>Sign Up</button>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <p>Don't have an account ? <Link exact to="/admin-signup"><span style={{color:'#089bab'}}>Sign Up</span></Link></p>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}