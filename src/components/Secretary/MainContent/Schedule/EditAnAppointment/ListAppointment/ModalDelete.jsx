import React from "react";
import { Modal, Fade, Button, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
		alignItems: "center",
	},
}));

export function ModalDelete() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [openTwo, setOpenTwo] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleModalTwo = () => {
		setOpen(false);
		setOpenTwo(true);
	};

	const handleCloseTwo = () => {
		setOpenTwo(false);
	};

	return (
		<div>
			<Button type='button' size='small' color='secondary' onClick={handleOpen}>
				Eliminar
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
						<h2>Seguro que quieres eliminar la cita?</h2>
						<Button
							variant='contained'
							onClick={handleModalTwo}
							style={{ width: "120px", marginTop: ".5rem" }}>
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
						<h2>Cita eliminada</h2>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
