/**
 * React Libs
 */
import React from "react";

/**
 * MateriaUI Components
 */
import { AccountBox, Business } from "@material-ui/icons";
import { Button, Card, CardActionArea, CardActions, CardMedia, Typography, makeStyles, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		width: 400,
		height: 400,
		margin: "3rem",
	},
	media: {
		height: 240,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "linear-gradient(to left, #2193b0, #6dd5ed)",
	},
	styleIconMedia: {
		fontSize: "9rem",
		color: "white",
	},
});

const MediaCard = ({ textContent, deploy, icon }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={5}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					title='Contemplative Reptile'
					onClick={() => deploy(icon)}>
					{icon === 1 
                        ? <AccountBox className={classes.styleIconMedia} />
                        : <Business className={classes.styleIconMedia} />
					}
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{textContent.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{textContent.parrf}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary' onClick={() => deploy(icon)}>
					{textContent.btnOne}
				</Button>
			</CardActions>
		</Card>
	);
}

export default MediaCard;