import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Carousel from 'react-elastic-carousel';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Admin/Styles.styles';

export const ConsumerSignup = () =>{
    const classes = styles();
    const [view,setView] = useState(false)
    const {img,form,item,container1,card1,form_control,label,division,button} = classes;
    const [inputField,setInputField] = useState({
        name:'',
        email:'',
        phone:'',
        otp:''
    })
      const items= [
          {id: 1, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 2, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 3, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
        ]
      
      const inputHandler = (e)=>{
        const {name,value} = e.target;
        setInputField((prevstate)=>({
            ...prevstate,
            [name]:value
        }))
    }
    const viewFunction=()=>{
          setView(true)
          const userData={
            name:inputField.name,
            email:inputField.email,
            phone:inputField.phone,
          }
          console.log("57-->",userData);
        axios.post('http://localhost:5000/consumer-signup',userData)
        .then((res)=>{
            if(res.data.isSuccess){
                console.log("57-->",res.data)
                alert(res.data.message)
            }else{
                  alert(res.data.message)
            }
        })
      }
    const submit = () =>{
        if(inputField.name==''|| inputField.email==''|| inputField.phone==''|| inputField.otp=='')
        {
            alert("All the fields need to be filled")
            return;
        }
        const userData={
            name:inputField.name,
            email:inputField.email,
            phone:inputField.phone,
            otp:inputField.otp
          }
          console.log("57-->",userData);
        axios.post('http://localhost:5000/consumer-signup',userData)
        .then((res)=>{
            if(res.data.isSuccess){
                console.log("57-->",res.data)
                alert(res.data.message)
            }else{
                  alert(res.data.message)
            }
        })
       
    }
    return(
        <Container className={classes.container1}>
                            <Card className={classes.card1}>
                            <CardContent className={classes.content1}>
                                <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign Up</p>                                
                                    <label htmlFor="name" className={classes.label}>Full Name</label>
                                    <input type="text" name="name" className={classes.form_control} onChange={inputHandler} value={inputField.name}/>
                                <div className={classes.division}>
                                    <label htmlFor="email" className={classes.label}>Email</label>
                                    <input type="text" name="email" className={classes.form_control} onChange={inputHandler} value={inputField.email}/>
                                </div>
                                <div className={classes.division}>
                                    <label htmlFor="phone" className={classes.label}>Phone</label>
                                    <input type="text" name="phone" className={classes.form_control} onChange={inputHandler} value={inputField.phone}/>
                                </div>
                                {
                                    view?
                                    <div className={classes.division}>
                                        <label htmlFor="otp" className={classes.label}>OTP</label>
                                        <input type="number" name="otp" className={classes.form_control} onChange={inputHandler} value={inputField.otp}/>
                                    </div>:''
                                }
                                {
                                    !view?<div className={classes.division}>
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
                                    <p>Already a member ? <Link exact to="/consumer-login"><span style={{color:'#089bab'}}>Sign In</span></Link></p>
                                </div>
                            </CardContent>
                            </Card>
                        </Container>
    )
}