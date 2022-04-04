import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect,useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Styles.styles.js';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'

import { BounceLoader } from "react-spinners";
import { TramOutlined } from "@material-ui/icons";
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
export const AddStaff = (props) =>{
      const classes = styles();
      const myClass = style();
      const {container1,card1,form_control,label,division1,button} = classes;
      const [spinner, setSpinner] = useState(false);
      const [hospital,sethospital] = useState('');
      const [id,setId] = useState('')

      const lItem = Cookies.get("Admin");
      if(lItem)
        console.log("True")
      else
        console.log("False")
    useEffect(()=>{
        setSpinner(TramOutlined)
        const data = Cookies.get("Admin");
        console.log("36-->",data)
        const decoded = jwt_decode(data);
        console.log("38-->",decoded.data.hospitalName)
        sethospital(decoded.data.hospitalName)
        setId(decoded.data._id)
        console.log("44-->",decoded.data._id);
    },[])
    const [inputField,setInputField] = useState({
        hospitalName:'',
        employeeName:'',
        employeeId:'',
    })
    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setInputField((prevstate)=>({
            ...prevstate,
            [name]:value
        }))
    }
    // console.log("41-->",inputField)
    const submit = () =>{
        if(inputField.employeeName==''|| inputField.employeeId=='')
        {
            alert("All the fields need to be filled")
            return;
        }
        const userData={
            hospitalName:hospital,
            employeeName:inputField.employeeName,
            employeeId:inputField.employeeId
          }
          console.log("57-->",{...userData,id})
        axios.post('http://localhost:5000/add-staff',{...userData,id})
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
        <>
        <Container className={myClass.container1}>
            <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'2.5rem',textAlign:'center'}}>Add Staff</p>   
                                                
                    <label htmlFor="name" className={classes.label}>Hospital Name</label>
                    <input type="text" name="name" className={classes.form_control} placeholder="Enter hospital name" value={hospital} disabled/>
                    
                            <div className={classes.division1}>
                                <label htmlFor="employeeName" className={classes.label}>Employee Name</label>
                                <input type="email" name="employeeName" className={classes.form_control} onChange={inputHandler} value={inputField.employeeName}/>
                            </div>
                       
                            <div className={classes.division1}>
                                <label htmlFor="employeeId" className={classes.label}>Employee Id</label>
                                <input type="number" name="employeeId" className={classes.form_control} onChange={inputHandler} value={inputField.employeeId} />
                            </div>                        
                    <div className={classes.division1}>
                        <button className={classes.button} onClick={submit}>Add</button>
                    </div>
                    
                </CardContent>
            </Card>
        </Container>
        </>
    )
}