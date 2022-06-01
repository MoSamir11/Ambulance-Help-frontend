import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState,useEffect } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from './Styles.styles.js';

export const AdminSignup = () =>{
      const classes = styles();
      const {img,form,item,container1,card1,form_control,label,division,button} = classes;
      const [inputField,setInputField] = useState({
          hospitalName:'',
          email:'',
          phone:'',
          specialist:'',
          address:'',
          pin:'',
          password:'',
          latitude:'',
          longitude:'',
      })
      useEffect(() => {
        // Update the document title using the browser API
        
      });
      const inputHandler = (e)=>{
          const {name,value} = e.target;
          setInputField((prevstate)=>({
              ...prevstate,
              [name]:value
          }))
      }
    const submit = () =>{
        if(inputField.hospitalName==''|| inputField.email==''|| inputField.phone==''|| inputField.address=='' ||inputField.pin==''||inputField.password==''|| inputField.latitude || inputField.longitude)
        {
            alert("All the fields need to be filled")
            return;
        }
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
                const candidateData={
                    hospitalName:inputField.hospitalName,
                    email:inputField.email,
                    phone:inputField.phone,
                    specialist:inputField.specialist,
                    address:inputField.address,
                    pin:inputField.pin,
                    password:inputField.password,
                    latitude:latitude,
                    longitude:longitude
                  }
                  console.log("57-->",candidateData);
                  axios.post('http://localhost:5000/admin-signup',candidateData)
                  .then((res)=>{
                      if(res.data.isSuccess){
                          console.log("57-->",res.data)
                          alert(res.data.message)
                          
                      }else{
                            alert(res.data.message)
                      }
                  })
            })
        }
    }
      const data=[
          {
              label:'Email',
              type:"text",
              name:"email",
              placeholder:"Enter email"
          },
          {
            label:'Phone',
            type:"number",
            name:"phone",
            placeholder:"e.g: 123456789"
        },
        {
            label:'Specialist In',
            type:"text",
            name:"specialist",
            placeholder:"e.g: Heart Surgery"
        },
        {
            label:'City',
            type:"text",
            name:"address",
            placeholder:"e.g:Asansol"
        },
        {
            label:'Pin Code',
            type:"number",
            name:"pin",
            placeholder:"Pin Code"
        },
        {
            label:'Password',
            type:"password",
            name:"password",
            placeholder:"Enter password"
        },
        {
            label:'Confirm Password',
            type:"password",
            name:"password",
            placeholder:"confirm password"
        }
      ]
    return(
        <>
        <Container className={classes.container1}>
            <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign Up</p>   
                                                
                    <label htmlFor="name" className={classes.label}>Hospital Name</label>
                    <input type="text" name="hospitalName" className={classes.form_control} placeholder="Enter hospital name" onChange={inputHandler} value={inputField.name} />
                    <Grid container spacing={1}> 
                    {
                        data.map((field)=>{
                            return(
                            <Grid item sm={6}>
                                <div className={classes.division}>
                                    <label htmlFor={field.type} className={classes.label}>{field.label}</label>
                                    <input type={field.type} name={field.name} placeholder={field.placeholder} className={classes.form_control} onChange={inputHandler} value={inputField.name} />
                                </div>
                            </Grid>
                            )
                        })
                    }
                    </Grid>
                    <div className={classes.division}>
                        <button className={classes.button} onClick={submit}>Sign Up</button>
                    </div>
                    
                    <div style={{textAlign:'center'}}>
                        <p>Already a member ? <Link exact to="/admin-login"><span style={{color:'#089bab'}}>Sign In</span></Link></p>
                    </div>
                </CardContent>
            </Card>
        </Container>
        </>
    )
}