import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Carousel from 'react-elastic-carousel';
import {BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom";
import styles from '../Admin/Styles.styles';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'


export const ConsumerLogin = () =>{
    const classes = styles();
    let history = useHistory();
    const {img,form,item,card1,form_control,label,division,button} = classes;
    const useStyles = makeStyles((theme) => ({
        container1: {
            padding: "18% 15% 15% 15% ",
            [theme.breakpoints.down("sm")]: {
              padding: "0 3% 3% 5% ",
            },
          },
    }))
    const myClass = useStyles();
    const [view,setView] = useState(false)
      const items= [
          {id: 1, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 2, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 3, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
        ]
    const [inputField,setInputField] = useState({
            phone:'',
            otp:''
    })
    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setInputField((prevstate)=>({
            ...prevstate,
            [name]:value
        }))
    }
    const viewFunction=()=>{
        if(inputField.phone=='' || inputField.phone.length != 10)
        {
            alert("All the fields need to be filled");
            return;
        }
       
        const userData={
          phone:inputField.phone,
        }
        console.log("48-->",userData);
        axios.post('http://localhost:5000/consumer-login',userData)
        .then((res)=>{
          if(res.data.isSuccess){
              setView(true)
              console.log("54-->",view)
              alert(res.data.message)
          }else{
                alert(res.data.message)
                console.log("57-->",res.data)
          }
      })
    }
    const submit = () =>{
        if(inputField.name==''|| inputField.otp=='')
        {
            alert("All the fields need to be filled")
            return;
        }
        const userData={
            phone:inputField.phone,
            otp:inputField.otp
          }
          console.log("57-->",userData);
        axios.post('http://localhost:5000/consumer-login',userData)
        .then((res)=>{
            if(res.data.isSuccess){
                console.log("75-->",res.data)
                alert(res.data.message)
                Cookies.set("consumer",res.data.token)
                const decoded = jwt_decode(res.data.token);
                history.push('/consumer-dashboard')
                window.location.reload();

            }else{
                  alert(res.data.message)
            }
        })
       
    }
    return(
        <Container className={myClass.container1}>
            <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign In</p>                                
                    <label htmlFor="phone" className={classes.label}>Phone</label>
                    <input type="number" name="phone" className={classes.form_control} onChange={inputHandler} value={inputField.phone}/>
                    {
                        view?
                        <div className={classes.division}>
                            <label htmlFor="otp" className={classes.label}>OTP</label>
                            <input type="number" name="otp" className={classes.form_control} onChange={inputHandler} value={inputField.otp}/>
                        </div>:''
                    }
                    {
                        !view?
                        <div className={classes.division}>
                            <button className={classes.button} onClick={viewFunction} >Sign Up</button>
                        </div>:''
                    }
                    {
                        view?
                        <div className={classes.division}>
                            <button className={classes.button} onClick={submit}>Validate OTP</button>
                        </div>:''
                    }
                        <div style={{textAlign:'center'}}>
                            <p>Don't have an account ? <Link exact to="/consumer-signup"><span style={{color:'#089bab'}}>Sign Up</span></Link></p>
                        </div>
                </CardContent>
            </Card>
        </Container>
    )
}