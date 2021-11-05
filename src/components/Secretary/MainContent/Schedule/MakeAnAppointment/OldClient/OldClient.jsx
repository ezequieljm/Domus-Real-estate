import React from "react";
import {
	Paper,
	makeStyles,
	Typography,
	Grow,
	Modal,
	Fade,
	Backdrop,
	Button,
} from "@material-ui/core";
import QueryClient from "./QueryClient";
import { TextField } from "@material-ui/core";
import DatePickerCustom from "../../DatePicker/DatePicker";
import { CheckCircleOutline } from "@material-ui/icons";

const dbUsers = [
	{
		id: "298023",
		firtsname: "Jill",
		surname: "Valentine",
		dni: "76589634",
		cuitCuil: "33-234235235-1",
		dateOfBirth: "10/05/1990",
		cellPhone: "+54-787699834",
		email: "jillValentine@stars.com",
	},
];

const useStyle = makeStyles((theme) => ({
	rootPaper: {
		width: "70%",
		height: "300px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
	},
	divContent: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
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

function SearchFieldAndWindowModal({
	setEntryUser,
	handleOpen,
	handleClose,
	entryUser,
	open,
}) {
	const classes = useStyle();

	return (
		<>
			<Grow in>
				<div className={classes.divContent}>
					<Paper elevation={3} className={classes.rootPaper}>
						<Typography variant='h3'>Buscar Cliente</Typography>
						<QueryClient changeInput={setEntryUser} handleOpen={handleOpen} />
					</Paper>
				</div>
			</Grow>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
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
						<i
							class='fas fa-user-times'
							style={{
								marginBottom: "1rem",
								fontSize: "9rem",
								color: "#ef5350",
							}}></i>
						<Typography variant='h5'>Cliente no encontrado</Typography>
						<Typography variant='subtitle1'>
							{`El cliente "${entryUser}" no se encuentra registrado`}
						</Typography>
					</div>
				</Fade>
			</Modal>
		</>
	);
}

function FormDataUser({ clientData }) {
	return (
		<form action=''>
			<div style={{ padding: "1rem" }}>
				<TextField
					label='Nombre'
					variant='outlined'
					disabled
					defaultValue={clientData.firtsname}
					style={{ marginRight: "2rem" }}
				/>
				<TextField
					label='Apellido'
					variant='outlined'
					disabled
					defaultValue={clientData.surname}
					style={{ marginRight: "2rem" }}
				/>
				<TextField
					label='DNI'
					variant='outlined'
					disabled
					defaultValue={clientData.dni}
				/>
			</div>
			<div style={{ padding: "1rem" }}>
				<TextField
					label='CUIL/CUIT'
					variant='outlined'
					disabled
					defaultValue={clientData.cuitCuil}
					style={{ marginRight: "2rem" }}
				/>
				<TextField
					label='Nacimiento'
					variant='outlined'
					disabled
					defaultValue={clientData.dateOfBirth}
					style={{ marginRight: "2rem" }}
				/>
				<TextField
					label='Teléfono'
					variant='outlined'
					disabled
					defaultValue={clientData.cellPhone}
				/>
			</div>
			<div style={{ padding: "1rem" }}>
				<TextField
					label='Email'
					variant='outlined'
					disabled
					defaultValue={clientData.email}
				/>
			</div>
		</form>
	);
}

function ClientFound({ clientData }) {
	return (
		<>
			<Typography variant='h3' style={{ paddingLeft: "1rem" }}>
				{clientData.firtsname + " " + clientData.surname}
			</Typography>
			<FormDataUser clientData={clientData} />
		</>
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

function ReservAppointment({ closeModal }) {
	const [day, setDay] = React.useState(new Date().toLocaleDateString());
	const [house, setHouse] = React.useState("");
	const houseReserved = ["0000", "2352", "9698", "8751"];

	return (
		<>
			<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
				<Typography variant='h6'>
					1. Seleccione un día y horario para la cita
				</Typography>
				<DatePickerCustom setDay={setDay} />
			</div>
			<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
				<Typography variant='h6'>
					2. Seleccione un agente inmobiliario
				</Typography>
				<SelectHouseAgent dayAvailable={day} />
			</div>
			<div style={{ marginBottom: ".5rem", padding: "1rem" }}>
				<Typography variant='h6'>
					3. Ingrese el código de al propiedad
				</Typography>
				<TextField
					label='Propiedad'
					error={houseReserved.some((houseItem) => houseItem === house)}
					helperText={
						house === "" || house.length < 4
							? "Ingrese el código de la propiedad para visitar"
							: houseReserved.some((hi) => hi === house)
							? `La propiedad ya fue reservada para la fecha ${day}`
							: `Propiedad disponible para visitar ${day}`
					}
					variant='outlined'
					onChange={(e) => setHouse(e.target.value)}></TextField>
			</div>
			<ModalView closeModal={closeModal} />
		</>
	);
}

/* Main Component */
export default function OldClient() {
	const [open, setOpen] = React.useState(false);
	const [entryUser, setEntryUser] = React.useState("");
	const [renderViewFinedUser, setFinedUser] = React.useState(false);

	const getFullName = (db, inx) => db[inx].firtsname + " " + db[inx].surname;

	function handleOpen(e) {
		e.preventDefault();
		getFullName(dbUsers, 0) === entryUser ? setFinedUser(true) : setOpen(true);
	}

	const handleClose = () => setOpen(false);

	React.useEffect(() => {
		setEntryUser("");
	}, [renderViewFinedUser]);

	return (
		<>
			{!renderViewFinedUser ? (
				<SearchFieldAndWindowModal
					setEntryUser={setEntryUser}
					handleOpen={handleOpen}
					handleClose={handleClose}
					entryUser={entryUser}
					open={open}
				/>
			) : (
				<Paper elevation={5} style={{ width: "98%", padding: "1rem" }}>
					<ClientFound clientData={dbUsers[0]} />
					<ReservAppointment closeModal={setFinedUser} />
					<Button
						onClick={() => setFinedUser(false)}
						variant='contained'
						color='secondary'
						style={{ marginTop: "1rem" }}>
						Volver
					</Button>
				</Paper>
			)}
		</>
	);
}

function ModalView({ closeModal }) {
	const classes = useStyle();
	const [openModalView, setOpenModal] = React.useState(false);
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		closeModal(false);
	};

	return (
		<div>
			<Button
				variant='contained'
				color='primary'
				style={{ marginTop: "1rem" }}
				onClick={handleOpenModal}>
				Agendar Cita
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
						<h1>Cita Agendada</h1>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
