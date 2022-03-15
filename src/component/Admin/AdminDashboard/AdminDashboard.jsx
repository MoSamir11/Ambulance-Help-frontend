import { AdminNavbar } from "./AdminNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddAmbulance } from "./AddAmbulance";
import { AddStaff } from "./AddStaff";

export const AdminDashboard = () =>{
    return(
        <>
            <Router>
                <AdminNavbar />
                <Switch>
                    <Route exact path="/admin-dashboard/add-ambulance" component={AddAmbulance}/>
                    <Route exact path="/admin-dashboard/add-staff" component={AddStaff}/>
                </Switch>
            </Router>
        </>
    )
}