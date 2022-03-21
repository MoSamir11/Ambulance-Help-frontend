import { ConsumerNavbar } from "./ConsumerNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState,useEffect } from "react";

export const ConsumerDashboard = () =>{
    const [hospital,sethospital] = useState('');

    // useEffect(()=>{
    //     const data = localStorage.getItem("Admin");
    //     console.log("72-->",data)
    //     const decoded = jwt_decode(data);
    //     console.log("74-->",decoded.data.hospitalName)
    //     sethospital(decoded.data.hospitalName)
    // },[])
    return(
        <>
            <Router>
                <ConsumerNavbar />
                {/* <Switch>
                    <Route exact path="/admin-dashboard/add-ambulance" component={AddAmbulance}/>
                    <Route exact path="/admin-dashboard/add-staff" component={AddStaff}/>
                    <Route exact path="/admin-dashboard/all-ambulance" component={AllAmbulance}/>
                    <Route exact path="/admin-dashboard/all-staff" component={AllStaff}/>
                </Switch> */}
            </Router>
        </>
    )
}