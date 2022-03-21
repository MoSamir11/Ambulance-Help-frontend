import { Card,CardContent,Container,Grid,makeStyles } from "@material-ui/core";
import { useState,useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import { Slide } from 'react-slideshow-image';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {AdminSignup} from './AdminSignup';
import { AdminLogin } from "./AdminLogin";
import styles from './Styles.styles.js';
import jwt_decode from "jwt-decode";

export const AdminTemplate = () =>{
    const classes = styles();
    const {container,card,content,img,form,item,container1,card1,form_control,label,division,button} = classes;
    const [hospital,sethospital] = useState('');

    //   const classes = useStyles();
    
      const items= [
          {id: 1, src: 'https://webartinfo.com/themeforest/medicil/img/banner.png'},
          {id: 2, src: 'https://medservice.vercel.app/images/image-03.png'},
          {id: 3, src: 'https://avstechnolabs.com/Themeforest/Medicapps/assets/images/hero/slider-2.png'},
        ]
        const [otp,setOtp] = useState(false)
        const [text,setText] = useState("Submit")
        function otpVerification()
        {
            setOtp(true);
            setText("Validate OTP")
        }
    return(
        <>
        <Container className={classes.container}>
            <Card className={classes.card}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6} xs={12}>
                        <CardContent className={classes.content}>  
                            <Carousel>
                                {items.map(item=><img src={item.src} className={classes.img} alt="" />)}
                            </Carousel>
                        </CardContent>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Router>
                            <Switch>
                                <Route exact path="/admin-signup" component={AdminSignup} />
                                <Route exact path="/admin-login" component={AdminLogin} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Card>
        </Container>
        </>
    )
}