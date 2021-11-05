import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import { InputLabel, Input, FormHelperText, Grow } from "@material-ui/core";

const useStyles = makeStyles({
	form: {
		width: "90%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	divsContent: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "1rem",
	},
	divFormPrivateClient: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	inputLabel: {
		fontSize: "1.1rem",
	},
});

const FormCorporateClient = () => {
	const classes = useStyles();
	return (
		<Grow in={true}>
			<div className={classes.divFormPrivateClient}>
				<form action='' className={classes.form}>
					<div className={classes.divsContent}>
						<FormControl required fullWidth style={{ marginRight: "2rem" }}>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Nombre y Apellido
							</InputLabel>
							<Input
								id='input-surname'
								aria-describedby='my-helper-text'
								type='text'
							/>
							<FormHelperText id='my-helper-text'>
								Nombre y Apellido del Cliente.
							</FormHelperText>
						</FormControl>

						<FormControl required fullWidth style={{ marginRight: "2rem" }}>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Razón Social
							</InputLabel>
							<Input
								id='input-name'
								aria-describedby='my-helper-text'
								type='text'
							/>
							<FormHelperText id='my-helper-text'>
								Razón Social del Cliente.
							</FormHelperText>
						</FormControl>

						<FormControl required fullWidth>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								CUIL/CUIT
							</InputLabel>
							<Input
								id='input-phone'
								aria-describedby='my-helper-text'
								type='text'
							/>
							<FormHelperText id='my-helper-text'>
								CUIL/CUIT del Cliente.
							</FormHelperText>
						</FormControl>
					</div>

					<div className={classes.divsContent}>
						<FormControl required fullWidth style={{ marginRight: "2rem" }}>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Fecha de Nacimiento
							</InputLabel>
							<Input
								id='input-birth'
								aria-describedby='my-helper-text'
								type='text'
							/>
							<FormHelperText id='my-helper-text'>
								Fecha de Nacimiento del Cliente.
							</FormHelperText>
						</FormControl>

						<FormControl required fullWidth style={{ marginRight: "2rem" }}>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Teléfono
							</InputLabel>
							<Input
								id='input-phone'
								aria-describedby='my-helper-text'
								type='text'
							/>
							<FormHelperText id='my-helper-text'>
								Teléfono de contacto.
							</FormHelperText>
						</FormControl>

						<FormControl required fullWidth>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Correo Electrónico
							</InputLabel>
							<Input
								id='input-email'
								aria-describedby='my-helper-text'
								type='email'
								fullWidth
							/>
							<FormHelperText id='my-helper-text'>
								Correo Electrónico del Cliente.
							</FormHelperText>
						</FormControl>
					</div>

					<div className={classes.divsContent}>
						<FormControl required fullWidth style={{ marginRight: "2rem" }}>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Dirección
							</InputLabel>
							<Input
								id='input-birth'
								aria-describedby='my-helper-text'
								type='text'
							/>
							<FormHelperText id='my-helper-text'>
								Dirección de oficina de Administración.
							</FormHelperText>
						</FormControl>
						<FormControl required fullWidth>
							<InputLabel htmlFor='my-input' className={classes.inputLabel}>
								Agente
							</InputLabel>
							<Input
								id='input-email'
								aria-describedby='my-helper-text'
								type='email'
								fullWidth
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
};

export default FormCorporateClient;
