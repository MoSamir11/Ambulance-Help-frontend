import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import Carousel from 'react-elastic-carousel';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Admin/Styles.styles';

export const ConsumerSignup = () =>{
    const classes = styles();
    const {img,form,item,container1,card1,form_control,label,division,button} = classes;
      const items= [
          {id: 1, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 2, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
          {id: 3, src: 'https://templates.iqonic.design/xray/html/images/login/2.png'},
        ]
    return(
        <Container className={classes.container1}>
                            <Card className={classes.card1}>
                            <CardContent className={classes.content1}>
                                <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign Up</p>                                
                                    <label htmlFor="name" className={classes.label}>Full Name</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                <div className={classes.division}>
                                    <label htmlFor="name" className={classes.label}>Email</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                </div>
                                <div className={classes.division}>
                                    <label htmlFor="name" className={classes.label}>Phone</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                </div>
                                <div className={classes.division}>
                                    <label htmlFor="name" className={classes.label}>OTP</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                </div>
                                <div className={classes.division}>
                                    <button className={classes.button}>Sign Up</button>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <p>Already a member ? <Link exact to="/consumer-login"><span style={{color:'#089bab'}}>Sign In</span></Link></p>
                                </div>
                            </CardContent>
                            </Card>
                        </Container>
    )
}