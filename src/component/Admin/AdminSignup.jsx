import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import { useState } from "react";
import Carousel from 'react-elastic-carousel';
import './AdminSignup.css';

export const AdminSignup = () =>{
    const useStyles = makeStyles((theme) => ({
        container: {
            padding: 40,
            [theme.breakpoints.down("sm")]:{
                padding: 7
            }
        },
        card:{
            backgroundColor:'#089bab',
            borderRadius:'20px',
            [theme.breakpoints.down("sm")]:{
                width:'100% '
            }
        },
        content:{
            padding:'5% 0 0 2%',
            textAlign:'center',
        },
        img:{
            width:'30vw',
            height:'60vh',
            // borderRadius:'20px',
            borderRadius:'10px',
            [theme.breakpoints.down("sm")]:{
                width:'60vw',
                height:'30vh',
            }
        },
        form: {
            padding: theme.spacing(2)
        },
        item: {
            marginBottom: theme.spacing(2)
        },
        container1:{
            padding:20
        }
      }));
      const classes = useStyles();
      const items= [
          {id: 1, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 2, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 3, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
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
                            <Typography sx={{ fontSize: 14,color:'red' }} gutterBottom>
                                Word of the Day
                            </Typography>   
                            <Carousel>
                                {items.map(item=><img src={item.src} className={classes.img} alt="" />)}
                            </Carousel>
                        </CardContent>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Container className={classes.container1}>
                            <h1>Hello World</h1>
                        </Container>
                    </Grid>
                </Grid>
            </Card>
        </Container>
        </>
    )
}