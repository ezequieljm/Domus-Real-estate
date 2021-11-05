import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Add, CheckCircleOutline} from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import {
	Fade,
	Backdrop,
	Modal,
	Box,
	Fab,
	Zoom,
	Tabs,
	Tab,
	AppBar,
	Typography,
	TextField,
	Button,
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@material-ui/core";
import ListRental from "./ListRental";
import ListBuy from "./ListBuy";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "100%",
		position: "relative",
		minHeight: 200,
	},
	fab: {
		position: "absolute",
		bottom: theme.spacing(-5),
		right: theme.spacing(2),
	},
	fabGreen: {
		color: theme.palette.common.white,
		backgroundColor: green[500],
		"&:hover": {
			backgroundColor: green[600],
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
	paperTwo: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

function RadioButtonsGroup() {
	const [value, setValue] = React.useState("female");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<FormControl row component='fieldset'>
			<FormLabel component='legend'>Movimiento</FormLabel>
			<RadioGroup row name='gender1' value={value} onChange={handleChange}>
				<FormControlLabel value='female' control={<Radio />} label='Entrada' />
				<FormControlLabel value='male' control={<Radio />} label='Salida' />
			</RadioGroup>
		</FormControl>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`action-tabpanel-${index}`}
			aria-labelledby={`action-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `action-tab-${index}`,
		"aria-controls": `action-tabpanel-${index}`,
	};
}

function TransitionsModal({ open, handleClose }) {
	const classes = useStyles();
	const [openTwo, setOpen] = React.useState(false);

	const handleOpenTwo = () => {
		setOpen(true);
	};

	const handleCloseTwo = () => {
		setOpen(false);
	};

	const addTrans = () => {
		handleClose();
		handleOpenTwo();
	};

	return (
		<div>
			<Modal
				className={classes.modal}
				open={open}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<Typography style={{ marginBottom: "1rem" }} variant='h5'>
							Registro de movimiento
						</Typography>
						<Typography style={{ marginBottom: "1rem" }} variant='subtitle1'>
							Complete los siguientes campos.
						</Typography>
						<form action=''>
							<div
								style={{
									padding: ".5rem",
									width: "600px",
									display: "flex",
									justifyContent: "space-between",
								}}>
								<TextField
									fullWidth
									label='Fecha'
									defaultValue='07/05/2021'
									variant='outlined'
									style={{ marginRight: "2rem" }}
								/>
								<TextField
									fullWidth
									label='Hora'
									defaultValue='15:45:00'
									variant='outlined'
								/>
							</div>
							<div
								style={{
									padding: ".5rem",
									width: "600px",
									display: "flex",
									justifyContent: "space-between",
								}}>
								<TextField
									fullWidth
									label='Concepto'
									helperText='Concepto del movimiento'
									variant='outlined'
									style={{ marginRight: "2rem" }}
								/>
								<TextField
									fullWidth
									label='Monto'
									helperText='Monto en pesos'
									variant='outlined'
								/>
							</div>
							<RadioButtonsGroup />
							<div>
								<Button onClick={addTrans} variant='contained' color='primary'>
									Agregar
								</Button>
							</div>
						</form>
					</div>
				</Fade>
			</Modal>
			<Modal
				className={classes.modal}
				open={openTwo}
				closeAfterTransition
				onClose={handleCloseTwo}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={openTwo}>
					<div className={classes.paperTwo}>
						<CheckCircleOutline
							style={{
								color: "green",
								fontSize: "9rem",
								margintBottom: "2rem",
							}}
						/>
						<h1 >
							Transacción registrada exitosamente
						</h1>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function InputOutput() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	const fabs = [
		{
			color: "primary",
			className: classes.fab,
			icon: <Add />,
			label: "Add",
		},
		{
			color: "secondary",
			className: classes.fab,
			icon: <Add />,
			label: "Edit",
		},
	];

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'>
					<Tab label='Entradas' {...a11yProps(0)} />
					<Tab label='Salidas' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<div>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<ListRental />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<ListBuy />
				</TabPanel>
			</div>
			{fabs.map((fab, index) => (
				<Zoom
					key={fab.color}
					in={value === index}
					timeout={transitionDuration}
					style={{
						transitionDelay: `${
							value === index ? transitionDuration.exit : 0
						}ms`,
					}}
					unmountOnExit>
					<Fab className={fab.className} color={fab.color} onClick={handleOpen}>
						{fab.icon}
					</Fab>
				</Zoom>
			))}
			<TransitionsModal open={open} handleClose={handleClose} />
		</div>
	);
}
