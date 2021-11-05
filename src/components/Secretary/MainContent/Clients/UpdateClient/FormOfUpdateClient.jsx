import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import { InputLabel, Input, FormHelperText, Grow } from "@material-ui/core";
import dbClients from '../dbClients.json';

const dbUsers = dbClients.registeredClient;

const useStyles = makeStyles({
	form: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	divsContent: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "30px",
	},
	divFormPrivateClient: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default function FormFill() {
	const classes = useStyles();
	return (
		<Grow in={true}>
			<div className={classes.divFormPrivateClient}>
				<form action='' className={classes.form}>
					<div className={classes.divsContent}>
						<FormControl required fullWidth focused>
							<InputLabel htmlFor='my-input'>Razón Social</InputLabel>
							<Input
								id='input-name'
								aria-describedby='my-helper-text'
								type='text'
								defaultValue={dbUsers[0].razonSocial}
							/>
							<FormHelperText id='my-helper-text'>
								Razón Social del Cliente.
							</FormHelperText>
						</FormControl>
					</div>
					<div className={classes.divsContent}>
						<FormControl required fullWidth focused>
							<InputLabel htmlFor='my-input'>Nombre y Apellido</InputLabel>
							<Input
								id='input-surname'
								aria-describedby='my-helper-text'
								type='text'
								defaultValue={dbUsers[0].firstname + " " + dbUsers[0].surname}
							/>
							<FormHelperText id='my-helper-text'>
								Nombre y Apellido del Cliente.
							</FormHelperText>
						</FormControl>
					</div>
					<div className={classes.divsContent}>
						<FormControl
							required
							fullWidth
							style={{ marginRight: "2rem" }}
							focused>
							<InputLabel htmlFor='my-input'>CUIL/CUIT</InputLabel>
							<Input
								id='input-cuit-cuil'
								aria-describedby='my-helper-text'
								type='text'
								defaultValue={dbUsers[0].cuitCuil}
							/>
							<FormHelperText id='my-helper-text'>
								CUIL/CUIT del Cliente.
							</FormHelperText>
						</FormControl>
						<FormControl required fullWidth focused>
							<InputLabel htmlFor='my-input'>Teléfono</InputLabel>
							<Input
								id='input-phone'
								aria-describedby='my-helper-text'
								type='text'
								defaultValue={dbUsers[0].cellPhone}
							/>
							<FormHelperText id='my-helper-text'>
								Teléfono de contacto.
							</FormHelperText>
						</FormControl>
					</div>

					<div className={classes.divsContent}>
						<FormControl required fullWidth focused>
							<InputLabel htmlFor='my-input'>Correo Electrónico</InputLabel>
							<Input
								id='input-email'
								aria-describedby='my-helper-text'
								type='email'
								fullWidth
								defaultValue={dbUsers[0].email}
							/>
							<FormHelperText id='my-helper-text'>
								Correo Electrónico del Cliente.
							</FormHelperText>
						</FormControl>
					</div>

					<div className={classes.divsContent}>
						<FormControl
							required
							fullWidth
							style={{ marginRight: "2rem" }}
							focused>
							<InputLabel htmlFor='my-input'>Dirección</InputLabel>
							<Input
								id='input-birth'
								aria-describedby='my-helper-text'
								type='text'
								defaultValue={dbUsers[0].address}
							/>
							<FormHelperText id='my-helper-text'>
								Dirección de oficina de Administración.
							</FormHelperText>
						</FormControl>
						<FormControl required fullWidth focused>
							<InputLabel htmlFor='my-input'>Agente</InputLabel>
							<Input
								id='input-house-agent'
								aria-describedby='my-helper-text'
								type='email'
								fullWidth
								defaultValue={dbUsers[0].houseAgent}
							/>
							<FormHelperText id='my-helper-text'>
								Agente Inmobiliario a cargo.
							</FormHelperText>
						</FormControl>
					</div>
				</form>
			</div>
		</Grow>
	);
}