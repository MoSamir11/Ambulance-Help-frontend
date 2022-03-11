import { Container, makeStyles, Typography } from '@material-ui/core';
import { Chat, Dashboard, DateRangeOutlined, GroupAdd, GroupRounded, Home, LocalDiningOutlined, LocalGroceryStore, Person, Report, Settings } from '@material-ui/icons';
// import { classes } from 'istanbul-lib-coverage';
// import { Dashboard } from '@material-ui/icons';
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        height: "100vh",
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: '#555',
            border: '1px solid #ece7e7'
        },
        position: "sticky",
        top: 0,
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: '18px'
        }
    },
    text: {
        fontWeight: '500',
        [theme.breakpoints.down("sm")]: {
            // marginBottom: theme.spacing(3),
            // cursor: "pointer"
            display: "none"
        },
        letterSpacing: '0.02em',
        marginLeft: '14.41px',
        fontSize: '13px',
    },
    title: {
        marginBottom: theme.spacing(5),
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '40.5562px',
        color: '#2C79CA'
    }
}))

export const Leftbar = () => {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            {/* <div className={classes.title}>
                mySeema
            </div> */}
            <div className={classes.item}>
                <Dashboard className={classes.icon} />
                <Typography className={classes.text}>
                    Dashboard
                </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>
                    Members
                </Typography>
            </div><div className={classes.item}>
                <Chat className={classes.icon} />
                <Typography className={classes.text}>
                    Chats
                </Typography>
            </div><div className={classes.item}>
                <DateRangeOutlined className={classes.icon} />
                <Typography className={classes.text}>
                    Appointments
                </Typography>
            </div><div className={classes.item}>
                <GroupAdd className={classes.icon} />
                <Typography className={classes.text}>
                    Staff
                </Typography>
            </div><div className={classes.item}>
                <Report className={classes.icon} />
                <Typography className={classes.text}>
                    Reports
                </Typography>
            </div><div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>
                    Settings
                </Typography>
            </div>
            <div className={classes.item}>
                <LocalGroceryStore className={classes.icon} />
                <Typography className={classes.text}>
                    Logout
                </Typography>
            </div>
        </Container>)
}