import React from "react";
import {
	Typography,
	Button,
	Paper,
	Grow,
	Modal,
	Backdrop,
	Fade,
	TextField,
	IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircleOutline, ImageSearch } from "@material-ui/icons";
import TitlebarGridList from "./GridListTileBars";

const useStyles = makeStyles((theme) => ({
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
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

function SaveChanges({ setViewGallery }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setViewGallery(0);
	};

	return (
		<div>
			<Button onClick={handleOpen} variant='contained' color='primary'>
				Guardar Cambios
			</Button>
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
						<CheckCircleOutline
							style={{ fontSize: "9rem", color: "green", marginBottom: "1rem" }}
						/>
						<Typography variant='h4'>
							Cambios guardados correctamente
						</Typography>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function EditGallery({ setViewGallery }) {
	return (
		<Grow in>
			<Paper elevaton={5} style={{ padding: "1rem" }}>
				<Typography variant='h4' style={{ marginBottom: "1rem" }}>
					Galería
				</Typography>
				<div style={{ display: "flex" }}>
					<TitlebarGridList />
					<div
						style={{
							width: "50%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "end",
							alignItems: "flex-end",
						}}>
						<Paper
							style={{
								display: "flex",
								width: "95%",
								marginBottom: "2rem",
								padding: "1rem",
							}}
							elevation={5}>
							<TextField
								label='Subir Imagen'
								fullWidth
								helperText='Sube una imagen desde tu dispositivo'
								// variant="outlined"
							/>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<IconButton>
									<ImageSearch style={{ fontSize: "2rem" }} />
								</IconButton>
							</div>
						</Paper>
						<SaveChanges setViewGallery={setViewGallery} />
					</div>
				</div>
			</Paper>
		</Grow>
	);
}
