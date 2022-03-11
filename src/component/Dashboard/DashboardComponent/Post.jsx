import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core"
const useStyle = makeStyles((theme) => ({
    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
    },
    card: {
        marginBottom: theme.spacing(5)
    }
}))
export const Post = () => {
    const classes = useStyle({
    })
    return < Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image="https://mui.com/static/images/cards/contemplative-reptile.jpg" title="My Post" />
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post
                </Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates explicabo, a quidem magni maiores natus vero architecto nihil itaque dolore fuga labore minus minima repellendus. Qui veritatis pariatur cumque.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
}