import { alpha, AppBar,InputBase, Drawer,List,Divider,Button,Zoom,Listener,ListItemText,ListItemIcon,Box, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip,Container } from '@material-ui/core'
import { Mail, Search, Notifications, Cancel, MenuOutlined } from '@material-ui/icons';
import { FaAmbulance ,FaListUl} from 'react-icons/fa';
import { BiListPlus } from 'react-icons/bi';
import { AiOutlineUserAdd,AiOutlineLogout } from 'react-icons/ai';

import { SearchOff } from '@mui/icons-material';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useHistory, Redirect} from "react-router-dom";
import style from '../../Landing/Landing.styles';
import Cookies from 'js-cookie';
export const AdminNavbar = () => {
    const [open, setOpen] = useState(false)
    // const classes = useStyles({
    //     open
    // })
    const classes = style();
    const history = useHistory()
    const data = [
        {
          text: <BiListPlus size={35}/>,
          to:'/admin-dashboard/add-ambulance',
          tooltipTitle:'Add Ambulance'
        },
        {
          text: <FaAmbulance size={35} />,
          to:'/admin-dashboard/all-ambulance',
          tooltipTitle:'All Ambulance'
        },
        {
          text: <AiOutlineUserAdd size={35}/>,
          to:'/admin-dashboard/add-staff',
          tooltipTitle:'Add Staff'
        },
        {
          text: <FaListUl size={35}/>,
          to:'/admin-dashboard/all-staff',
          tooltipTitle:'All Staff'
        }
    ];
    function logout(e){
        const lData = Cookies.get("Admin")
        if(lData){
            Cookies.remove('Admin');
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
                                <li className="nav-item ml-5 mr-5 pl-4 pr-5">
                                    <Tooltip title={e.tooltipTitle} arrow TransitionComponent={Zoom}>
                                        <Link exact to={e.to} className="nav-link text-light">{e.text}</Link>
                                    </Tooltip>
                                </li>
                                )
                            })
                        }
                        <li className="nav-item ml-5 mr-5 mt-2 pl-4 pr-5" onClick={logout}>
                            <AiOutlineLogout size={30}/>
                        </li>
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