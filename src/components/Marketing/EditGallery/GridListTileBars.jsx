import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	GridList,
	GridListTile,
	GridListTileBar,
	IconButton,
	Paper,
	Modal,
	Backdrop,
	Fade,
	Button,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { dbTileData } from "./TileData";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
		padding: ".5rem",
	},
	gridList: {
		width: 800,
		height: 450,
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

function TransitionsModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [openTwo, setOpenTwo] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setOpenTwo(true);
	};

	const handleCloseTwo = () => {
		setOpenTwo(false);
	};

	return (
		<div>
			<IconButton onClick={handleOpen} className={classes.icon}>
				<Delete />
			</IconButton>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 style={{marginBottom: '2rem'}}>Seguro que quieres eliminar esta imagen?</h2>
						<Button variant='contained' color='secondary' onClick={handleClose}>
							Confirmar
						</Button>
					</div>
				</Fade>
			</Modal>
			<Modal
				className={classes.modal}
				open={openTwo}
				onClose={handleCloseTwo}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={openTwo}>
					<div className={classes.paper}>
						<i className='fas fa-trash-alt' style={{marginBottom: '2rem',fontSize: '9rem', color: 'green'}}></i>
						<h1>Imagen Eliminada</h1>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function TitlebarGridList() {
	const classes = useStyles();
	return (
		<Paper elevation={5} className={classes.root}>
			<GridList cellHeight={180} cols={3} className={classes.gridList}>
				{dbTileData.map((tile) => (
					<GridListTile key={tile.id}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							subtitle={<span>Eliminar</span>}
							actionIcon={<TransitionsModal />}
						/>
					</GridListTile>
				))}
			</GridList>
		</Paper>
	);
}
