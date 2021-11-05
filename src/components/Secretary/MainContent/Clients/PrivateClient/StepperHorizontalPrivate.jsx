import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Typography, Grow } from "@material-ui/core";
import FormPrivateClient from "./FormPrivateClient";
import UploadDocs from "../UploadDocuments/UploadDocs";
import CheckDatasPriv from "./CheckDatasPriv";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return [
		"Complete los datos del cliente",
		"Suba la documentación",
		"Verifique si la información es correcta",
	];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return "Complete los campos con los datos del cliente particular. No deben quedar campos incompletos.";
		case 1:
			return "Suba la documentación del cliente. Indique el nombre del archivo y una descripción.";
		case 2:
			return "Verifique si los campos son correctos antes de confirmar la operación.";
		default:
			return "Unknown stepIndex";
	}
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () =>
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	const handleBack = () =>
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	const handleReset = () => setActiveStep(0);

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<Grow in={activeStep === steps.length}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography className={classes.instructions} variant='h4'>
								Cliente registrado exitosamente!
							</Typography>
							<CheckCircleOutlineIcon
								style={{ fontSize: "12rem", color: "#4CAF50" }}
							/>
							<Button variant='contained' color='primary' onClick={handleReset}>
								Añadir Otro Cliente
							</Button>
						</div>
					</Grow>
				) : (
					<div>
						{activeStep === 0 ? (
							<FormPrivateClient />
						) : activeStep === 1 ? (
							<UploadDocs />
						) : (
							<CheckDatasPriv />
						)}
						<Typography className={classes.instructions}>
							{getStepContent(activeStep)}
						</Typography>
						<div>
							<Button
								variant='contained'
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.backButton}>
								Atras
							</Button>
							<Button variant='contained' color='primary' onClick={handleNext}>
								{activeStep === steps.length - 1 ? "Confirmar" : "Siguiente"}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
