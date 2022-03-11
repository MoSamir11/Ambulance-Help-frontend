import { Container, Fab, makeStyles, Modal, Tooltip, TextField, RadioGroup, FormControlLabel, Radio, MenuItem, FormLabel, Button, Snackbar } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
// import MuiAlert from '@mui/material/Alert';
import React, { useState } from "react";
import { Post } from './Post'
const useStyle = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 10,
        right: 10
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: '100vw',
            height: '100vh'
        },
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(2)
    }
}))
export const Add = () => {
    const classes = useStyle({
    })
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = React.useState(false);

    const handleClick = () => {
        setOpenAlert(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };
    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autocomplete="off">
                        <div className={classes.item}>
                            <TextField id="outlined-basic" label="Title" variant="outlined" size="small" style={{ width: '100%' }} />                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-multiline-static" multiline rows={4} label="Description" variant="outlined" size="small" style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="visibility" id="outlined-basic" variant="outlined" size="small" style={{ width: '100%' }}>
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment ?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="everybody" control={<Radio />} label="Everybody" />
                                <FormControlLabel value="myFriends" control={<Radio />} label="My Friends" />
                                <FormControlLabel value="nobody" control={<Radio />} label="Nobody" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" size="small" style={{ marginRight: 10 }} onClick={handleClick}>Create</Button>
                            <Button variant="outlined" color="secondary" size="small" onClick={() => setOpen(false)}>Cancel</Button>

                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    )
}