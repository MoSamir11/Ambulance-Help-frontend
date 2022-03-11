import "./App.css";
import { Button, Grid } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Navbar } from "./component/Dashboard/DashboardComponent/Navbar";
import { Feed } from "./component/Dashboard/DashboardComponent/Feed";
import { Rightbar } from "./component/Dashboard/DashboardComponent/Rightbar";
import { Leftbar } from "./component/Dashboard/DashboardComponent/Leftbar";
import { Add } from "./component/Dashboard/DashboardComponent/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FeedTwo } from "./component/Dashboard/DashboardComponent/FeedTwo";
import { ConsumerLogin } from "./component/Consumer/ConsumerLogin/ConsumerLogin";
import { ConsumerSignup } from "./component/Consumer/ConsumerSignup/ConsumerSignup";
import { AdminSignup } from "./component/Admin/AdminSignup";
import { Dashboard } from "./component/Dashboard/Dashboard";
function App() {
  const useStyles = makeStyles((theme) => ({
    button: {
      ...theme.myButton,
    },
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    container: {
      paddingTop: theme.spacing(10),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/second" component={Dashboard} />
          <Route exact path="/admin-signup" component={AdminSignup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
