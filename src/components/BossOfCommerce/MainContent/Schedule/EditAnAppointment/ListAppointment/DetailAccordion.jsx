import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Accordion,
	AccordionSummary,
	AccordionActions,
	AccordionDetails,
	Typography,
	Button,
	Table,
	TableContainer,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	TextField,
	Grow,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ModalDelete } from "./ModalDelete";
import {
	MuiPickersUtilsProvider,
	KeyboardDateTimePicker,
} from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "1rem",
	},
	heading: {
		fontSize: theme.typography.pxToRem(16),
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(16),
		// color: theme.palette.text.secondary,
		color: "grey",
	},
	icon: {
		verticalAlign: "bottom",
		height: 20,
		width: 20,
	},
	details: {},
	column: {
		flexBasis: "33.33%",
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: theme.spacing(1, 2),
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline",
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
	},
}));

const arr = [
	{
		title: "Visita Mansión CJ",
		description: {
			desBrev: "Ir a la casa en Grove Street",
			fecha: new Date().toLocaleDateString(),
			hora: new Date().toLocaleTimeString(),
			agente: "Carl Johnson",
			propiedad: "4352",
			estado: "En Proceso",
		},
	},
	{
		title: "Visita laboratorio",
		description: {
			desBrev: "Ir a Laboratorio en Raccoon City",
			fecha: new Date().toLocaleDateString(),
			hora: new Date().toLocaleTimeString(),
			agente: "Leon Kennedy",
			propiedad: "4352",
			estado: "Cancelada",
		},
	},
	{
		title: "Cobrar Alquiler",
		description: {
			desBrev: "Controlar los alquileres de Silent Hill",
			fecha: new Date().toLocaleDateString(),
			hora: new Date().toLocaleTimeString(),
			agente: "Alan Wake",
			propiedad: "4352",
			estado: "En Proceso",
		},
	},
	{
		title: "Visita Freeman",
		description: {
			desBrev: "Visitar la casa Freeman en ciudad 17",
			fecha: new Date().toLocaleDateString(),
			hora: new Date().toLocaleTimeString(),
			agente: "Gordon Freeman",
			propiedad: "4352",
			estado: "Cancelada",
		},
	},
	{
		title: "Reunion Durotan",
		description: {
			desBrev: "Hablar con el nuevo cliente Durotan",
			fecha: new Date().toLocaleDateString(),
			hora: new Date().toLocaleTimeString(),
			agente: "Ned Bigby",
			propiedad: "4352",
			estado: "Finalizada",
		},
	},
];

function Row({ row }) {
	const selectColor = (color) => {
		return color === "En Proceso"
			? "blue"
			: color === "Finalizada"
			? "green"
			: "red";
	};

	return (
		<TableRow>
			<TableCell />
			<TableCell align='right'>{row.description.fecha}</TableCell>
			<TableCell align='right'>{row.description.hora}</TableCell>
			<TableCell align='right'>{row.description.agente}</TableCell>
			<TableCell align='right'>{row.description.propiedad}</TableCell>
			<TableCell
				align='right'
				style={{ color: selectColor(row.description.estado) }}>
				{row.description.estado}
			</TableCell>
		</TableRow>
	);
}

function ComponentEditAppointment({ setOptionApp }) {
	const [selectedDate, handleDateChange] = React.useState(
		new Date().toLocaleString()
	);
	return (
		<Grow in>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					marginTop: "1rem",
				}}>
				<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
					<KeyboardDateTimePicker
						value={selectedDate}
						onChange={handleDateChange}
						label='Fecha y Hora'
						format='dd/MM/yyyy hh:mm a'
						helperText='Selecciona una Fecha y Hora'
					/>
				</MuiPickersUtilsProvider>
				<TextField
					select
					label='Agente'
					SelectProps={{ native: true }}
					helperText='Selecciona un agente inmobiliario'>
					{["Ned Bigby", "Gordon Freeman", "Feynman"].map((agent) => (
						<option key={agent} value={agent}>
							{agent}
						</option>
					))}
				</TextField>
				<TextField
					label='Propiedad'
					helperText='Ingrese el código de la propiedad'
					defaultValue='6853'></TextField>
				<Button
					size='small'
					variant='contained'
					onClick={() => setOptionApp(2)}>
					Confirmar
				</Button>
			</div>
		</Grow>
	);
}

function EditedActivity() {
	return (
		<Grow in>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "1rem",
				}}>
				<CheckCircleOutlineIcon style={{ color: "green" }} />
				<Typography variant='p'>Actividad editada</Typography>
			</div>
		</Grow>
	);
}
export default function DetailedAccordion() {
	const classes = useStyles();
	const [openEdit, setOpenEdit] = React.useState(0);

	return (
		<>
			{arr.map((appointment) => (
				<Accordion
					style={{ border: "1px grey solid" }}
					onChange={(e) => setOpenEdit(0)}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon style={{ color: "grey" }} />}>
						<div className={classes.column}>
							<Typography className={classes.heading}>
								{appointment.title}
							</Typography>
						</div>
						<div className={classes.column}>
							<Typography className={classes.secondaryHeading}>
								{appointment.description.desBrev}
							</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails
						className={classes.details}
						style={{ background: "white" }}>
						<div style={{ width: "100%" }}>
							<TableContainer>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell />
											<TableCell align='right'>Fecha</TableCell>
											<TableCell align='right'>Hora</TableCell>
											<TableCell align='right'>Agente</TableCell>
											<TableCell align='right'>Propiedad</TableCell>
											<TableCell align='right'>Estado</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<Row key={appointment.title} row={appointment} />
									</TableBody>
								</Table>
							</TableContainer>
							{openEdit === 1 && (
								<ComponentEditAppointment setOptionApp={setOpenEdit} />
							)}
							{openEdit === 2 && <EditedActivity />}
						</div>
					</AccordionDetails>
					<AccordionActions style={{ background: "white" }}>
						{appointment.description.estado === "Cancelada" && (
							<Button style={{ color: "green" }} size='small'>
								Restablecer
							</Button>
						)}
						<Button size='small' color='primary' onClick={() => setOpenEdit(1)}>
							Editar
						</Button>
						<ModalDelete />
					</AccordionActions>
				</Accordion>
			))}
		</>
	);
}
