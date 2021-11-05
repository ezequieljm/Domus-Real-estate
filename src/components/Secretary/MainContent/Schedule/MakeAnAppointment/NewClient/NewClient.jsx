import React from "react";
import {
	Button,
	Typography,
	Paper,
	FormControl,
	TextField,
	Grow,
	Modal,
	Fade,
	Backdrop,
} from "@material-ui/core";
import DatePickerCustom from "../../DatePicker/DatePicker";
import { CheckCircleOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		background: "white",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		textAlign: "center",
	},
}));

/* Component of new client form */
function FormNewClient() {
	return (
		<form action=''>
			<FormControl style={{ marginRight: "2rem" }}>
				<TextField label='Nombre' helperText='Nombre y Apellido del cliente' />
			</FormControl>
			<FormControl style={{ marginRight: "2rem" }}>
				<TextField label='Teléfono' helperText='Número de Teléfono' />
			</FormControl>
			<FormControl>
				<TextField label='Email' helperText='Correo electrónico' />
			</FormControl>
		</form>
	);
}

/* Component selection house agent */
function SelectHouseAgent({ dayAvailable }) {
	const [currency, setCurrency] = React.useState("Ned Bigby");

	const currencies = [
		{
			agent: "Ned Bigby",
		},
		{
			agent: "Gordon Freeman",
		},
		{
			agent: "Barney Calhoun",
		},
		{
			agent: "John Price",
		},
	];

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<TextField
			select
			label='Agente'
			value={currency}
			onChange={handleChange}
			SelectProps={{
				native: true,
			}}
			helperText={`Agentes disponibles para fecha ${dayAvailable}`}
			variant='outlined'>
			{currencies.map((option) => (
				<option key={option.agent} value={option.agent}>
					{option.agent}
				</option>
			))}
		</TextField>
	);
}

/* Main Component */
export default function NewClient({ setView }) {
	const houseReserved = ["0000", "2352", "9698", "8751"];
	const [day, setDay] = React.useState(new Date().toLocaleDateString());
	const [house, setHouse] = React.useState("");

	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem", width: "98%" }}>
				<Typography variant='h4'>Cita nuevo cliente</Typography>
				<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
					<Typography variant='h6'>
						1. Complete los campos con los datos del cliente
					</Typography>
					<FormNewClient />
				</div>
				<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
					<Typography variant='h6'>
						2. Seleccione un día y horario para la cita
					</Typography>
					<DatePickerCustom setDay={setDay} />
				</div>
				<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
					<Typography variant='h6'>
						3. Seleccione un agente inmobiliario
					</Typography>
					<SelectHouseAgent dayAvailable={day} />
				</div>
				<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
					<Typography variant='h6'>
						4. Ingrese el código de al propiedad
					</Typography>
					<TextField
						label='Propiedad'
						error={houseReserved.some((houseItem) => houseItem === house)}
						helperText={
							house === "" || house.length < 4
								? "Ingrese el código de la propiedad para visitar"
								: houseReserved.some((hi) => hi === house)
								? `La propiedad ya fue reservada para la fecha ${day}`
								: `Propiedad disponible para visita ${day}`
						}
						variant='outlined'
						onChange={(e) => setHouse(e.target.value)}></TextField>
				</div>
				<ModalView closeModal={setView}/>
				<Button
					onClick={() => setView(2)}
					style={{ marginTop: "1rem" }}
					variant='contained'
					color='secondary'>
					Volver
				</Button>
			</Paper>
		</Grow>
	);
}

function ModalView({closeModal}) {
	const classes = useStyles();
	const [openModalView, setOpenModal] = React.useState(false);
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		closeModal(2);
	};
	return (
		<div>
			<Button
				variant='contained'
				color='primary'
				style={{ marginTop: "1rem" }}
				onClick={handleOpenModal}>
				Agendar cita
			</Button>
			<Modal
				className={classes.modal}
				open={openModalView}
				onClose={handleCloseModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={openModalView}>
					<div className={classes.paper}>
						<CheckCircleOutline
							style={{
								color: "green",
								fontSize: "9rem",
								margintBottom: "2rem",
							}}
						/>
						<h1>Cita agendada</h1>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
