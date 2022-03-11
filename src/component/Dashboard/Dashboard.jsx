import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import { Container, Fab, makeStyles, Modal, Tooltip, TextField, RadioGroup, FormControlLabel, Radio, MenuItem, FormLabel,  Snackbar } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";

import { Navbar } from "./DashboardComponent/Navbar";
import { Feed } from "./DashboardComponent/Feed";
import { Rightbar } from "./DashboardComponent/Rightbar";
import { Leftbar } from "./DashboardComponent/Leftbar";
import { Add } from "./DashboardComponent/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FeedTwo } from "./DashboardComponent/FeedTwo";
export const Dashboard=()=>{
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
return(
  <div>
        <Router>
        <Navbar />
        <Grid container>
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Switch>
            <Route exact path="/">
              <Grid item sm={7} xs={10}>
                <Feed />
              </Grid>
            </Route>
            <Route exact path="/second">
              <Grid item sm={7} xs={10}>
                <FeedTwo />
              </Grid>
            </Route>
            {/* <Route exact path="/user-login">
              <Grid item sm={7} xs={10}>
                <ConsumerLogin />
              </Grid>
            </Route>
            <Route exact path="/user-signup">
              <Grid item sm={7} xs={10}>
                <ConsumerSignup />
              </Grid>
            </Route> */}
          </Switch>
          <Grid item sm={3} className={classes.right}>
            <Rightbar />
          </Grid>
        </Grid>
        <Add />
      </Router>
  </div>
)
}
