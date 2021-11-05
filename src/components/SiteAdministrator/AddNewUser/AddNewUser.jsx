import React from "react";
import {
	Typography,
	Grow,
	Paper,
	FormControl,
	TextField,
	Button,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { CheckCircleOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	divForm: {
		marginBottom: "1rem",
		padding: ".5rem",
		display: "flex",
		justifyContent: "space-between",
	},
}));
const jobs = [
	{
		value: "Gerente/a",
	},
	{
		value: "Secretaria/o",
	},
	{
		value: "Administrador/a del Sitio",
	},
	{
		value: "Agente inmobiliario",
	},
	{
		value: "Marketing",
	},
	{
		value: "Jefe/a Comercialización",
	},
	{
		value: "Jefe/a Administración",
	},
	{
		value: "Cajero/a",
	},
];

function FormNewUser({ setView, setUserAdded, initialUser }) {
	const [userDataChange, setUserData] = React.useState(initialUser);
	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserAdded(userDataChange);
		setView(1);
	};

	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem", width: 750 }}>
				<Typography variant='h4' style={{ marginBottom: "1rem" }}>
					Nuevo usuario
				</Typography>
				<div>
					<form action='' onSubmit={handleSubmit}>
						<div className={classes.divForm}>
							<FormControl fullWidth>
								<TextField
									style={{ marginRight: "2rem" }}
									label='Nombre'
									type='text'
									helperText='Nombre del usuario'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											firstname: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
							<FormControl fullWidth>
								<TextField
									label='Apellido'
									type='text'
									helperText='Apellido del usuario'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											surname: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
						</div>
						<div className={classes.divForm}>
							<FormControl fullWidth>
								<TextField
									style={{ marginRight: "2rem" }}
									label='DNI'
									type='number'
									helperText='Dni del usuario'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											dni: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
							<FormControl fullWidth>
								<TextField
									select
									required
									label='Puesto'
									defaultValue={jobs[0].value}
									helperText='Puesto de trabajo'
									variant='outlined'
									onChange={(e) =>
										setUserData({
											...userDataChange,
											job: e.target.value,
										})
									}>
									{jobs.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.value}
										</MenuItem>
									))}
								</TextField>
							</FormControl>
						</div>

						<div className={classes.divForm}>
							<FormControl fullWidth>
								<TextField
									style={{ marginRight: "2rem" }}
									label='Teléfono'
									type='number'
									helperText='Teléfono de contacto'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											phone: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
							<FormControl fullWidth>
								<TextField
									label='Teléfono alternativo'
									type='number'
									helperText='Teléfono de contacto alternativo'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											alternativePhone: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
						</div>

						<div className={classes.divForm}>
							<FormControl fullWidth>
								<TextField
									style={{ marginRight: "2rem" }}
									label='Email'
									type='email'
									helperText='Dirección de correo electrónico'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											email: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
							<FormControl fullWidth>
								<TextField
									label='Usuario'
									type='text'
									helperText='Nombre de usuario'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											nameUser: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
						</div>
						<div className={classes.divForm}>
							<FormControl fullWidth>
								<TextField
									style={{ marginRight: "2rem" }}
									label='Contraseña'
									type='text'
									helperText='Contraseña del usuario'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											password: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
							<FormControl fullWidth>
								<TextField
									label='Confirmar'
									type='text'
									helperText='Confirmar contraseña'
									variant='outlined'
									required
									onChange={(e) =>
										setUserData({
											...userDataChange,
											passwordConfirmed: e.currentTarget.value,
										})
									}
								/>
							</FormControl>
						</div>
						<div className={classes.divForm}>
							<Button type='submit' variant='contained' color='primary'>
								Guardar Cambios
							</Button>
						</div>
					</form>
				</div>
			</Paper>
		</Grow>
	);
}

function UserAdded({ setView, userAdded }) {
	return (
		<Grow in>
			<Paper
				elevation={5}
				style={{
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					alignItems: "center",
				}}>
				<Typography variant='h3' style={{ marginBottom: "1rem" }}>
					Usuario añadido exitosamente
				</Typography>
				<Typography
					variant='h5'
					style={{
						marginBottom: "1rem",
					}}>{`${userAdded.firstname} ${userAdded.surname} como ${userAdded.job}`}</Typography>
				<CheckCircleOutline style={{ color: "green", fontSize: "10rem" }} />
				<div>
					<Button
						variant='contained'
						color='primary'
						onClick={() => setView(0)}
						style={{ marginTop: "1rem" }}>
						Añadir un nuevo usuario
					</Button>
				</div>
			</Paper>
		</Grow>
	);
}

const initialUser = {
	firstname: "",
	surname: "",
	dni: "",
	job: "",
	phone: "",
	alternativePhone: "",
	email: "",
	nameUser: "",
	password: "",
	passwordConfirmed: "",
};

export default function AddNewUser() {
	const [viewOk, setView] = React.useState(0);
	const [userAdded, setUserAdded] = React.useState(initialUser);

	return (
		<>
			{viewOk === 0 && (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<FormNewUser
						setView={setView}
						setUserAdded={setUserAdded}
						initialUser={initialUser}
					/>
				</div>
			)}
			{viewOk >= 1 && <UserAdded setView={setView} userAdded={userAdded} />}
		</>
	);
}
