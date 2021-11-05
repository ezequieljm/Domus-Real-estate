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
				Asentar el pago
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
	idHouse: "#AC0000",
	kindHouse: "Departamento",
	location: {
		country: "Argentina",
		estate: "Chaco",
		city: "Resistencia",
		street: "Golf Club Siempre Viva",
		numberAddress: "123",
		postal: "3500",
	},
	amount: {
		toilets: "3",
		bredooms: "2",
		suits: "0",
	},
	acient: "70",
	spaces: "2",
	artefacts: "5",
	services: ["Internet", "Luz", "Agua"],
	ower: {
		id: "AC3425",
		type: "Corporativo",
		firstname: "Albert",
		surname: "Wesker",
		dni: "967234567",
		phone: "+54-786541223",
		email: "wesker@umbrella.com",
		address: "Raccoon City 1234",
	},
};

function DataHouseForm() {
	return (
		<div>
			<Typography variant='h5'>{`Inmueble ${validDataHouse.idHouse}`}</Typography>
			<form action=''>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Tipo'
						disabled
						defaultValue={validDataHouse.kindHouse}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Antigüedad'
						disabled
						defaultValue={validDataHouse.acient}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Espacios'
						disabled
						defaultValue={validDataHouse.spaces}
						fullWidth
						helperText='Espacios con los que cuenta'
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Artefactos'
						disabled
						defaultValue={validDataHouse.artefacts}
						fullWidth
						variant='outlined'
						helperText='Artefactos con los que cuenta'
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Baños'
						disabled
						defaultValue={validDataHouse.amount.toilets}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Dormitorios'
						disabled
						defaultValue={validDataHouse.amount.bredooms}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Suites'
						disabled
						defaultValue={validDataHouse.amount.suits}
						fullWidth
						variant='outlined'
					/>
				</div>
				<Typography variant='subtitle1'>Ubicación</Typography>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='País'
						disabled
						defaultValue={validDataHouse.location.country}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Provincia'
						disabled
						defaultValue={validDataHouse.location.estate}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Ciudad'
						disabled
						defaultValue={validDataHouse.location.city}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Calle'
						disabled
						defaultValue={validDataHouse.location.street}
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
						label='Número'
						disabled
						defaultValue={validDataHouse.location.numberAddress}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Código Postal'
						disabled
						defaultValue={validDataHouse.location.postal}
						fullWidth
						variant='outlined'
					/>
				</div>
				<Typography variant='subtitle1'>Datos de propietario</Typography>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<TextField
						label='Código'
						disabled
						defaultValue={validDataHouse.ower.id}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Tipo'
						disabled
						defaultValue={validDataHouse.ower.type}
						fullWidth
						variant='outlined'
						helperText='Tipo de cliente'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Nombre'
						disabled
						defaultValue={validDataHouse.ower.firstname}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Apellido'
						disabled
						defaultValue={validDataHouse.ower.surname}
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
						label='DNI'
						disabled
						defaultValue={validDataHouse.ower.dni}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Teléfono'
						disabled
						defaultValue={validDataHouse.ower.phone}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Corre electrónico'
						disabled
						defaultValue={validDataHouse.ower.email}
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Dirección'
						disabled
						defaultValue={validDataHouse.ower.address}
						fullWidth
						variant='outlined'
					/>
				</div>
			</form>
		</div>
	);
}

function FormToFillOut() {
	const [pay, setPay] = React.useState("");
	const handleChange = (e) => {
		setPay(e.target.value);
	};

	const [kindOfBuy, setBuy] = React.useState("");
	const handleChangeBuy = (e) => {
		setBuy(e.target.value);
	};
	const classes = useStyles();
	return (
		<div>
			<Typography variant='h5'>Registro de alquiler</Typography>
			<Typography variant='subtitle1'>Complete los siguiente campos</Typography>
			<form action=''>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "1rem",
					}}>
					<FormControl
						variant='filled'
						className={classes.formControl}
						fullWidth
						style={{ marginRight: "2rem" }}>
						<InputLabel id='demo-simple-select-filled-label'>
							Tipo de Venta
						</InputLabel>
						<Select value={kindOfBuy} onChange={handleChangeBuy}>
							<MenuItem value={20}>Financiada</MenuItem>
							<MenuItem value={10}>Total</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Comisión'
						helperText='Porcentaje de comisión'
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
						label='Precio'
						helperText='Precio del inmueble'
						fullWidth
						variant='outlined'
						style={{ marginRight: "2rem" }}
					/>
					<TextField
						label='Moneda'
						helperText='Moneda de cotización'
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
					<FormControl
						variant='filled'
						className={classes.formControl}
						fullWidth>
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
