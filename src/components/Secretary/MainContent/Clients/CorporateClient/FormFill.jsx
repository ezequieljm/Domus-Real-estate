import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import { InputLabel, Input, FormHelperText, Grow } from "@material-ui/core";

const useStyles = makeStyles({
	form: {
		width: "500px",
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
								defaultValue='Dependiente'
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
								defaultValue='Alisson Page'
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
								id='input-phone'
								aria-describedby='my-helper-text'
								type='text'
								defaultValue='33-23243623-11'
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
								defaultValue='+54-23456342'
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
								defaultValue='alisson@gmail.com'
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
								defaultValue='Silent Hill 456'
							/>
							<FormHelperText id='my-helper-text'>
								Dirección de oficina de Administración.
							</FormHelperText>
						</FormControl>
						<FormControl required fullWidth focused>
							<InputLabel htmlFor='my-input'>Agente</InputLabel>
							<Input
								id='input-email'
								aria-describedby='my-helper-text'
								type='email'
								fullWidth
								defaultValue='Ned Bigby'
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
