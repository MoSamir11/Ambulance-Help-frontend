import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from './Styles.styles.js';
export const AdminSignup = () =>{
    
      const classes = styles();
      const {img,form,item,container1,card1,form_control,label,division,button} = classes;
    return(
        <>
          <Container className={classes.container1}>
            <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign Up</p>                                
                    <label htmlFor="name" className={classes.label}>Hospital Name</label>
                    <input type="text" name="name" className={classes.form_control} />
                    <div className={classes.division}>
                        <label htmlFor="eail" className={classes.label}>Email</label>
                        <input type="email" name="email" className={classes.form_control} />
                    </div>
                    <div className={classes.division}>
                        <label htmlFor="phone" className={classes.label}>Phone</label>
                        <input type="number" name="phone" className={classes.form_control} />
                    </div>
                    <div className={classes.division}>
                        <label htmlFor="address" className={classes.label}>Address</label>
                        <input type="text" name="address" className={classes.form_control} />
                    </div>
                    <div className={classes.division}>
                        <label htmlFor="pin" className={classes.label}>Pin</label>
                        <input type="number" name="pin" className={classes.form_control} />
                    </div>
                    <div className={classes.division}>
                        <label htmlFor="pwd" className={classes.label}>Password</label>
                        <input type="text" name="pwd" className={classes.form_control} />
                    </div>
                    <div className={classes.division}>
                        <label htmlFor="pwd" className={classes.label}>Confirm Password</label>
                        <input type="text" name="pwd" className={classes.form_control} />
                    </div>
                    <div className={classes.division}>
                        <button className={classes.button}>Sign Up</button>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <p>Already a member ? <Link exact to="/admin-login"><span style={{color:'#089bab'}}>Sign In</span></Link></p>
                    </div>
                </CardContent>
            </Card>
                </Container>
        </>
    )
}