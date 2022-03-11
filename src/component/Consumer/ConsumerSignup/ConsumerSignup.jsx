import { Container, Fab, makeStyles, Modal, Tooltip, TextField,Card, RadioGroup, FormControlLabel, Radio, MenuItem, FormLabel, Button, Snackbar, Typography } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
    container: {
        width: '40%',
        height: 550,
        backgroundColor: 'white',
        position: "absolute",
        alignItems:'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        paddingTop: theme.spacing(5),
        // paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            width: '100vw',
            height: '100vh',
            paddingLeft: theme.spacing(1),
            paddingTop: theme.spacing(8),
        },
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(2)
    }
}))
export const ConsumerSignup =() =>{
    const classes = useStyle({
    })
    const [otp,setOtp] = useState(false)
    const [text,setText] = useState("Submit")
    function otpVerification()
    {
        setOtp(true);
        setText("Validate OTP")
    }
    return(
        <Container className={classes.container}>
            <form className={classes.form} autocomplete="off">
                <div className={classes.item}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" size="small" style={{ width: '100%' }} />                        </div>
                <div className={classes.item}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small" style={{ width: '100%' }} />
                        </div>
                <div className={classes.item}>
                            <TextField id="outlined-basic" label="Phone" variant="outlined" size="small" style={{ width: '100%' }} />
                        </div>
                        
                {otp?
                    <div className={classes.item}>
                                <TextField id="outlined-basic" label="Otp" variant="outlined" size="small" style={{ width: '100%' }} />
                            </div>:''
                }
                <div className={classes.item}>
                    <Button variant="outlined" color="primary" size="small" style={{ marginRight: 10,width:'100%' }} onClick={otpVerification}>{text}</Button>
                </div>
                <div className={classes.item} style={{ textAlign: 'center'}}>
                    <Typography variant="body2" gutterBottom>
                        Already a member ?&nbsp;<Link exact to="/consumer-login">Login</Link>
                    </Typography>
                </div>
            </form>
        </Container>
    )
}
