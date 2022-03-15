import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from './Styles.styles.js';

export const AdminLogin = () =>{
    const classes = styles();
    const {img,form,item,card1,form_control,label,division,button} = classes;
    const useStyles = makeStyles((theme) => ({
        container1: {
            padding: "20% 15% 15% 15% ",
            [theme.breakpoints.down("sm")]: {
              padding: "0 3% 3% 5% ",
            },
          },
    }))
    const myClass = useStyles();
    return(
        <>
            <Container className={myClass.container1}>
                <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                                <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign In</p>                                
                                    <label htmlFor="name" className={classes.label}>Email</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                <div className={classes.division}>
                                    <label htmlFor="name" className={classes.label}>Password</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                </div>
                                <div className={classes.division}>
                                    <button className={classes.button}>Sign Up</button>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <p>Don't have an account ? <Link exact to="/admin-signup"><span style={{color:'#089bab'}}>Sign Up</span></Link></p>
                                </div>
                            </CardContent>
                </Card>
            </Container>
        </>
    )
}