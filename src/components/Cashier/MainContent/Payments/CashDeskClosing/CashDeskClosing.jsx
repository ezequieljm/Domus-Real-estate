import { Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Modal, Fade, Backdrop } from "@material-ui/core";
import { CheckCircleOutline, Print } from "@material-ui/icons";
import ListBuy from "../../Movements/Transactions/ListBuy";
import ListRental from "../../Movements/Transactions/ListRental";

const useRowStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
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
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

function TransitionsModal({ open, handleClose, handleOpen, text }) {
	const classes = useRowStyles();
	return (
		<div>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				onClick={handleOpen}
				className={classes.btn}>
				{text}
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
						<Print
							style={{ fontSize: "9rem", marginBottom: "2rem", color: "green" }}
						/>
						<h2>Documento listo para impresión</h2>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

function TransitionsModalCloseCash() {
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				onClick={handleOpen}
				className={classes.btn}
				style={{ marginRight: "2rem" }}>
				Cerrar caja
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
							style={{ fontSize: "9rem", marginBottom: "2rem", color: "green" }}
						/>
						<h2>Caja cerrada</h2>
						<p>Último cierre actualizado - 06/05/2021</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
export default function CashDeskClosing() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Paper elevation={5} style={{ padding: "1rem" }}>
			<div
				style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
				<Typography variant='h4' style={{ marginRight: "2rem" }}>
					Último cierre de caja
				</Typography>
				<Typography variant='h5'>05/05/2021</Typography>
			</div>
			<div>
				<Typography variant='h4' style={{ marginBottom: "1rem" }}>
					Alquileres
				</Typography>
				<ListRental />
			</div>
			<div style={{ marginTop: "2rem" }}>
				<Typography variant='h4' style={{ marginBottom: "1rem" }}>
					Ventas
				</Typography>
				<ListBuy />
			</div>
			<Paper
				elevation={5}
				style={{
					marginTop: "1rem",
					background: "#ef5350",
					padding: "1rem",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<Typography
					variant='h6'
					style={{ color: "white" }}>{`Balance Total:`}</Typography>
				<Typography variant='h6' style={{ color: "white" }}>
					{`4378500.75 $ARS`}
				</Typography>
			</Paper>
			<div style={{ display: "flex", marginTop: "1rem" }}>
				<TransitionsModalCloseCash />
				<TransitionsModal
					open={open}
					handleClose={handleClose}
					handleOpen={handleOpen}
					text='Imprimir Balance'
					sms={"Documento listo para impresión"}
				/>
			</div>
		</Paper>
	);
}
