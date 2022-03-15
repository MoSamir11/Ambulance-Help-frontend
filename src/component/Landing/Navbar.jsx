import { alpha, AppBar,InputBase, Drawer,List,Divider,Button,Listener,ListItemText,ListItemIcon,Box, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip,Container } from '@material-ui/core'
import { Mail, Search, Notifications, Cancel, MenuOutlined } from '@material-ui/icons';
import { SearchOff } from '@mui/icons-material';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import style from './Landing.styles.js';
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    Appbar: {
        backgroundColor: "#089bab",
      },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    btn: {
        padding: "0.4rem",
        fontSize: 15,
        borderRadius: 10,
        backgroundColor: "#089bab",
        borderWidth: 2,
        border: "1px solid #017e7e",
        outline: 2,
        color: "#ffffff",
      }
}))
export const Navbar1 = () => {
    const [open, setOpen] = useState(false)
    // const classes = useStyles({
    //     open
    // })
    const classes = style();

    const data = [
        {
          text: <Cancel />,
        },
        {
          text: <MenuOutlined />,
        },
        {
          text: <Notifications />,
        },
        {
          text: <Mail />,
        },
        {
          text: <SearchOff />,
        }
    ];
    return (
        <AppBar position="fixed" className={classes.Appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    Medi-Help
                </Typography>
                <div>
                <div className={classes.item}>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <ul className="navbar-nav">
                        {
                            data.map((e)=>{
                            return(
                                <li className="nav-item pl-4 pr-5">
                                    <a className="nav-link text-light">{e.text}</a>
                                </li>
                                )
                            })
                        }
                    </ul>
                    </nav>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Link type="button" exact to="/admin-login" className={classes.btn}>Admin Login</Link>&nbsp;&nbsp;&nbsp;
                    <Link type="button" exact to="/consumer-login" className={classes.btn}>Consumer Login</Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}