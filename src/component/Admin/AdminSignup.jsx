import { Card,CardContent,Box,Typography,CardActions,Button,Container } from "@material-ui/core";

export const AdminSignup = () =>{
    return(
        <>
        <Container>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        benevolent
                    </Typography>
                    <Typography color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Container>
        </>
    )
}