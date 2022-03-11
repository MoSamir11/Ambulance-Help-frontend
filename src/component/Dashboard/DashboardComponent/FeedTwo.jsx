import { Container, makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))
export const FeedTwo = () => {
    const classes = useStyle({
    })
    return <Container className={classes.container}>
        Feed Two
    </Container>

}