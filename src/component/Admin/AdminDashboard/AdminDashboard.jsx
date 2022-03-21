import { AdminNavbar } from "./AdminNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddAmbulance } from "./AddAmbulance";
import { AddStaff } from "./AddStaff";
import { AllAmbulance } from "./AllAmbulance";
import jwt_decode from "jwt-decode";
import { useState,useEffect } from "react";
import { AllStaff } from "./AllStaff";

export const AdminDashboard = () =>{
    const [hospital,sethospital] = useState('');

    useEffect(()=>{
        const data = localStorage.getItem("Admin");
        console.log("72-->",data)
        const decoded = jwt_decode(data);
        console.log("74-->",decoded.data.hospitalName)
        sethospital(decoded.data.hospitalName)
    },[])
    return(
        <>
            <Router>
                <AdminNavbar />
                <Switch>
                    <Route exact path="/admin-dashboard/add-ambulance" component={AddAmbulance}/>
                    <Route exact path="/admin-dashboard/add-staff" component={AddStaff}/>
                    <Route exact path="/admin-dashboard/all-ambulance" component={AllAmbulance}/>
                    <Route exact path="/admin-dashboard/all-staff" component={AllStaff}/>
                </Switch>
            </Router>
        </>
    )
}