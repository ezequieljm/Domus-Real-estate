import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import {
	Typography,
	Paper,
	IconButton,
	ListSubheader,
	GridListTileBar,
	GridListTile,
	GridList,
} from "@material-ui/core";
import { tileData } from "./dataHouse";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-between",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
		padding: "1rem",
	},
	gridList: {
		width: 670,
		height: 450,
		overflow: "auto",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
}));

export default function Catalogo() {
	const classes = useStyles();
	const [titleHouse, setTitleHouse] = React.useState("");
	const doSomething = (title) => {
		setTitleHouse(title);
	};
	return (
		<Paper elevation={5} className={classes.root}>
			<Paper elevation={5} className={classes.gridList}>
				<GridList cellHeight={180} style={{ width: 660 }}>
					<GridListTile key='Subheader' cols={2} style={{ height: "auto" }}>
						<ListSubheader component='div'>
							Catálogo de propiedades
						</ListSubheader>
					</GridListTile>
					{tileData.map((tile) => (
						<GridListTile key={tile.img} cols={1} rows={1}>
							<img
								src={tile.img}
								alt={tile.title}
								style={{ border: "1px solid balck" }}
							/>
							<GridListTileBar
								title={tile.title}
								subtitle={<span>by: {tile.author}</span>}
								actionIcon={
									<IconButton
										className={classes.icon}
										onClick={() => doSomething(tile.title)}>
										<InfoIcon />
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>
			</Paper>
			<Paper
				elevation={5}
				className={classes.gridList}
				style={{ padding: "1rem" }}>
				<Typography variant='h3'>{titleHouse}</Typography>
			</Paper>
		</Paper>
	);
}
