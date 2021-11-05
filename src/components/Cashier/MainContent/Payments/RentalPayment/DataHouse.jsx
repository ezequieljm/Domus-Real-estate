import React from "react";
import {
	Button,
	Typography,
	Modal,
	Fade,
	Backdrop,
	Grow,
	TextField,
	FormControl,
	MenuItem,
	Select,
	InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircleOutline } from "@material-ui/icons";

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
	mainContent: {
		display: "flex",
		flexDirection: "column",
		padding: "1rem",
	},
	borderBlack: {
		border: "1px solid black",
	},
	formControl: {
		margin: theme.spacing(0),
		minWidth: 120,
	},
}));

function TransitionsModal({ open, handleClose }) {
	const classes = useStyles();

	return (
		<div className={classes.modal}>
			<Button type='submit' variant='contained' color='primary'>
				Asentar el Pago
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
							style={{
								color: "green",
								fontSize: "9rem",
								margintBottom: "2rem",
							}}
						/>
						<h1 id='transition-modal-title'>
							Transacción registrada exitosamente
						</h1>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

const validDataHouse = {
	occupant: "Jill Valentine",
	ower: "Albert Wesker",
	rentalPrice: "7990.99",
	date: "21/3/2021",
	numberOfTransaction: "#AF3452",
};

function DataHouseForm() {
	return (
		<div>
			<Typography variant='h5'>Locatario #FA1234</Typography>
			<form action=''>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Inquilino'
						disabled
						defaultValue={validDataHouse.occupant}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Propietario'
						disabled
						defaultValue={validDataHouse.ower}
						fullWidth
						variant='outlined'
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Precio de Alquiler'
						disabled
						defaultValue={validDataHouse.rentalPrice}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Fecha de pago'
						disabled
						defaultValue={validDataHouse.date}
						fullWidth
						variant='outlined'
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Número de transacción'
						disabled
						defaultValue={validDataHouse.numberOfTransaction}
						fullWidth
						variant='outlined'
					/>
				</div>
			</form>
		</div>
	);
}

function FormToFillOut() {
	const [pay, setPay] = React.useState('');
	const handleChange = e => {
		setPay(e.target.value)
	}

	const classes = useStyles();
	return (
		<div>
			<Typography variant='h5'>Registrar alquiler</Typography>
			<form action=''>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Mes'
						helperText='Mes de pago de alquiler'
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Año'
						helperText='Año actual'
						fullWidth
						variant='outlined'
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Tasa de interes'
						helperText='Interes por mora'
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Monto'
						helperText='Total pagado'
						fullWidth
						variant='outlined'
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<FormControl variant='filled' className={classes.formControl} fullWidth>
						<InputLabel id='demo-simple-select-filled-label'>
							Forma de pago
						</InputLabel>
						<Select value={pay} onChange={handleChange}>
							<MenuItem value={40}>Efectivo</MenuItem>
							<MenuItem value={10}>Cuenta Corriente</MenuItem>
							<MenuItem value={20}>Tarjeta de Crédito</MenuItem>
							<MenuItem value={30}>Caja de ahorro</MenuItem>
						</Select>
					</FormControl>
				</div>
			</form>
		</div>
	);
}

export default function DataHouse() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [print, setPrint] = React.useState(false);

	const handleOpen = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setPrint(true);
	};

	return (
		<div className={classes.mainContent}>
			<DataHouseForm />
			<FormToFillOut />
			<form action='' onSubmit={handleOpen}>
				<TransitionsModal open={open} handleClose={handleClose} />
			</form>
			{print && (
				<Grow in>
					<div>
						<Button variant='contained'>Imprimir Ticket</Button>
					</div>
				</Grow>
			)}
		</div>
	);
}
