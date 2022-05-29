import Cookies from 'js-cookie';
import React,{Component,PureComponent,useEffect, useState} from 'react';
import { AdminNavbar } from './AdminNavbar';
import jwt_decode from "jwt-decode";
import {axios} from 'axios'

const AdminNavbar1 = () =>{
    const [notification,setNotification] = useState([]);
    useEffect(()=>{
        const token = Cookies.get("Admin");
        console.log("67-->",token);
        const decode = jwt_decode(token);
        console.log("49-->",decode.data.notification);
        setNotification(decode.data.notification)
        // axios.get(`http://localhost:5000/adminList/${decode.data._id}`)
        //  .then((res)=>{
        //     console.log("52-->",res)
        // })
    },[])
    return(
        <>
            <AdminNavbar notification={notification} />
        </>
    )
}
export default AdminNavbar1