import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Styles.styles.js';
const style = makeStyles((theme) => ({
    container1: {
      width:'60%',
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        width:'100%',
      },
    },
    division:{
        paddingTop: theme.spacing(2)
    }
}))
export const AddStaff = () =>{
      const classes = styles();
      const myClass = style();
      const {container1,card1,form_control,label,division1,button} = classes;
    return(
        <>
        <Container className={myClass.container1}>
            <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign Up</p>   
                                                
                    <label htmlFor="name" className={classes.label}>Hospital Name</label>
                    <input type="text" name="name" className={classes.form_control} placeholder="Enter hospital name" />
                    
                            <div className={classes.division1}>
                                <label htmlFor="eail" className={classes.label}>Driver Name</label>
                                <input type="email" name="email" className={classes.form_control} />
                            </div>
                       
                            <div className={classes.division1}>
                                <label htmlFor="phone" className={classes.label}>Driver Contact</label>
                                <input type="number" name="phone" className={classes.form_control} />
                            </div>
                       
                            <div className={classes.division1}>
                                <label htmlFor="address" className={classes.label}>Ambulance Number</label>
                                <input type="text" name="address" className={classes.form_control} />
                            </div>
                        
                           
                    <div className={classes.division1}>
                        <button className={classes.button}>Add</button>
                    </div>
                    
                </CardContent>
            </Card>
        </Container>
        </>
    )
}