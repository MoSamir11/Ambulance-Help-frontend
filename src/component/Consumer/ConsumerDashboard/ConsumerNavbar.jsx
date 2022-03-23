import { alpha, AppBar,InputBase, Drawer,List,Divider,Button,Listener,ListItemText,ListItemIcon,Box, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip,Container } from '@material-ui/core'
import { Mail, Search, Notifications, Cancel, MenuOutlined } from '@material-ui/icons';
import { FaAmbulance ,FaListUl} from 'react-icons/fa';
import { BiListPlus } from 'react-icons/bi';
import { AiOutlineUserAdd,AiOutlineLogout,AiOutlineHome } from 'react-icons/ai';

import { SearchOff } from '@mui/icons-material';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useHistory, Redirect} from "react-router-dom";
import style from '../../Landing/Landing.styles';
export const ConsumerNavbar = () => {
    const [open, setOpen] = useState(false)
    // const classes = useStyles({
    //     open
    // })
    const classes = style();
    const history = useHistory()
    const data = [
        {
          text: 'Home',
          to:'/comsumer-dashboard/home'
        },
        {
          text: 'AboutUs',
          to:'/comsumer-dashboard/aboutus'
        },
        {
          text: 'Blog',
          to:'/admin-dashboard/add-staff'
        },
        {
          text: <AiOutlineLogout size={30}/>,
          to:'/admin-dashboard/all-staff'
        }
    ];
    function logout(e){
        const lData = localStorage.getItem("Admin")
        if(lData){
            localStorage.removeItem('Admin');
            history.push("/");
        }
    }
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
                                <li className="nav-item ml-5 mr-5 pt-3 pl-4 pr-5">
                                    <Link exact to={e.to} className="nav-link text-light">{e.text}</Link>
                                </li>
                                )
                            })
                        }
                    </ul>
                    </nav>
                    </div>
                </div>
                <div className={classes.buttons}>
                    {/* <Link type="button" exact to="/admin-login" className={classes.btn}>Admin Login</Link>&nbsp;&nbsp;&nbsp;
                    <Link type="button" exact to="/consumer-login" className={classes.btn}>Consumer Login</Link> */}
                </div>
            </Toolbar>
        </AppBar>
    )
}