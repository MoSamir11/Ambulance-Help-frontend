import { Avatar, Container, ImageList, ImageListItem, makeStyles, Typography } from "@material-ui/core"
import { AvatarGroup } from "@material-ui/lab"
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#555',
        marginTop: theme.spacing(3)
    }
}))

export const Rightbar = () => {
    const classes = useStyle({})
    return <Container className={classes.container}>
        <Typography className={classes.title} gutterButton>Online Friends</Typography>
        <AvatarGroup max={3}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
        </AvatarGroup>
        <Typography className={classes.title} gutterButton>Gallery</Typography>
        <ImageList rowHeight={100} cols={2} classNAme={classes.imageList}>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=formatt'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='	https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format'
                    loading="lazy"
                />
            </ImageListItem>
        </ImageList>
    </Container>
}