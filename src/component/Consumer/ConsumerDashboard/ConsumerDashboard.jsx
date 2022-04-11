import { ConsumerNavbar } from "./ConsumerNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";

export const ConsumerDashboard = () =>{
    // const [hospital,sethospital] = useState('');
    const [name,setName] = useState('');
    return(
        <>
            <Router>
                <ConsumerNavbar />
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