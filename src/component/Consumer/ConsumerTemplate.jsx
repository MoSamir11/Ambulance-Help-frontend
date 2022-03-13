import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import { useState } from "react";
import Carousel from 'react-elastic-carousel';
import { Slide } from 'react-slideshow-image';
import { ConsumerLogin } from "./ConsumerLogin";
import { ConsumerSignup } from "./ConsumerSignup";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Admin/Styles.styles';

export const ConsumerTemplate = () =>{
    const classes = styles();
    const {container,card,content,img,form,item,container1,card1,form_control,label,division,button} = classes;
    const items= [
          {id: 1, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 2, src: 'https://templates.iqonic.design/xray/html/images/login/1.png'},
          {id: 3, src: 'https://templates.iqonic.design/xray/html/images/page-img/39.png'},
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
                                <Route exact path="/consumer-signup" component={ConsumerSignup} />
                                <Route exact path="/consumer-login" component={ConsumerLogin} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Card>
        </Container>
        </>
    )
}