import { ConsumerNavbar } from "./ConsumerNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";

import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import axios from "axios";

export const ConsumerDashboard = () =>{
    const [name,setName] = useState('');
    const [notification,setNotification] = useState([]);
    useEffect(()=>{
        const token = Cookies.get("consumer");
        console.log("token-->",token);
        const decode = jwt_decode(token);
        console.log("decode-->",decode.user);
        const id = decode.user.id;
        console.log("id-->",id);
        // setInterval(console.log("Hello World"), 1000);
        axios.get(`http://localhost:5000/consumerList/${id}`)
        .then((res)=>{
            // console.log("22-->",res.data.data)
            setNotification(res.data.data)
        })
    },[notification])
    // console.log("27-->",notification)
    return(
        <>
            <Router>
                <ConsumerNavbar notification={notification} />
                <Switch>
                    <Route exact path="/consumer-dashboard/home" component={Home} />
                    <Route exact path="/consumer-dashboard/aboutus" component={AboutUs} />
                    {/* <Route exact path="/admin-dashboard/all-ambulance" component={AllAmbulance}/>
                    <Route exact path="/admin-dashboard/all-staff" component={AllStaff}/> */}
                </Switch>
            </Router>
        </>
    )
}