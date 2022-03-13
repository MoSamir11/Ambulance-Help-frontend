import { Background } from "./Background"
import { Navbar1 } from "./Navbar"
import {Leftbar} from '../../component/Dashboard/DashboardComponent/Leftbar'
import { Button, Grid } from "@material-ui/core";

export const Landing = () =>{
    return(
        <>
        <Navbar1 />
        <Grid container>
            <Grid item sm={2} xs={2}>
                <Leftbar />
            </Grid>
        </Grid>
        </>
    )
}