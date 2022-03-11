import { alpha, AppBar, InputBase, makeStyles, Toolbar, Typography, Badge, Avatar,PersonIcon, Tooltip } from '@material-ui/core'
import { Mail, Search, Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%",
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(2)
    },
    cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    icons: {
        // display: "flex",
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),

    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))
export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({
        open
    })
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Lama Dev
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    Lama
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                    <Tooltip title="Service Provider Login" placement="top-start">
                        <Link exact to="/user-signup">
                            <Avatar alt="Remy Sharp" src="https://flyclipart.com/thumb2/login-935679.png" />
                        </Link>
                    </Tooltip>&nbsp;&nbsp;
                    <Tooltip title="User Login" placement="top-start">
                        <Link exact to="/user-login">
                            <Avatar alt="Remy Sharp" src="https://cdn5.vectorstock.com/i/1000x1000/77/59/user-login-or-authenticate-icon-personal-vector-29007759.jpg" />
                        </Link>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    )
}