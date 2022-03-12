import { alpha, AppBar, Drawer,List,Divider,Button,Listener,ListItemText,ListItemIcon,Box, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip,Container } from '@material-ui/core'
import { Mail, Search, Notifications, Cancel, MenuOutlined } from '@material-ui/icons';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    Appbar:{
        backgroundColor:'#089bab',
    },
    search: {
        display:'none',
        [theme.breakpoints.down("sm")]:{
            display:'block'
        }
    },
    btn:{
        padding:'0.4rem',
        fontSize:15,
        borderRadius:10,
        backgroundColor:'#089bab',
        borderWidth:2,
        border:'1px solid #017e7e',
        outline:2,
        color:'#ffffff',
    },
    btngroup:{
        [theme.breakpoints.down("sm")]:{
            display:'none'
        }
    }
}))
export const Navbar1 = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({
        open
    })
    return (
        <AppBar position="fixed" className={classes.Appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Medi-Help
                </Typography>
                <div className={classes.btngroup}>
                    <Button type="button" className={classes.btn}>Admin Login</Button>&nbsp;&nbsp;&nbsp;
                    <Button type="button" className={classes.btn}>Consumer Login</Button>
                </div>
                <div className={classes.search}>
                    <MenuOutlined />
                </div>
            </Toolbar>
        </AppBar>
    )
}