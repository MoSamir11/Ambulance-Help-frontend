import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import Carousel from 'react-elastic-carousel';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Admin/Styles.styles';

export const ConsumerLogin = () =>{
    const classes = styles();

    const {img,form,item,card1,form_control,label,division,button} = classes;
    const useStyles = makeStyles((theme) => ({
        container1: {
            padding: "18% 15% 15% 15% ",
            [theme.breakpoints.down("sm")]: {
              padding: "0 3% 3% 5% ",
            },
          },
    }))
    const myClass = useStyles();
      const items= [
          {id: 1, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 2, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 3, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
        ]
    return(
        <Container className={myClass.container1}>
                            <Card className={classes.card1}>
                            <CardContent className={classes.content1}>
                                <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign In</p>                                
                                    <label htmlFor="name" className={classes.label}>Phone</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                <div className={classes.division}>
                                    <label htmlFor="name" className={classes.label}>OTP</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                </div>
                                <div className={classes.division}>
                                    <button className={classes.button}>Sign Up</button>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <p>Don't have an account ? <Link exact to="/consumer-signup"><span style={{color:'#089bab'}}>Sign Up</span></Link></p>
                                </div>
                            </CardContent>
                            </Card>
                        </Container>
    )
}