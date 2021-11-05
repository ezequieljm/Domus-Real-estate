import React from "react";
import {
	InputAdornment,
	TextField,
	makeStyles,
	Button,
	Paper,
	Typography,
	Modal,
	Backdrop,
	Fade,
	Grow,
	IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import DataHouse from "./DataHouse";

const useStyles = makeStyles((theme) => ({
	rootDiv: {
		height: "160px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		width: "20%",
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
		textAlign: "center",
	},
	paperContent: {
		padding: "1rem",
	},
}));

function TransitionsModal({ open, handleClose }) {
	const classes = useStyles();

	return (
		<div
			style={{
				padding: "1rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.btn}>
				Buscar
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
						<i className="fas fa-user-slash" style={{fontSize: '8rem', color: 'red'}}></i>
						<h1 >Locatario no encontrado</h1>
						<p >
							Asegurese de que el código de cliente sea el correcto
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

const validUser = "fa1234";
export default function RantalPayment({ changeInput }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [idClient, setIdClient] = React.useState("");
	const [currentView, setView] = React.useState(0);

	const handleOpen = (e) => {
		e.preventDefault();
		validUser === idClient ? setView(1) : setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const showChange = (e) => setIdClient(e.currentTarget.value);

	return (
		<>
			{currentView === 0 && (
				<Grow in>
					<Paper elevation={5} className={classes.paperContent}>
						<Typography variant='h4'>Buscar Cliente</Typography>
						<div className={classes.rootDiv}>
							<form onSubmit={handleOpen} style={{ width: "80%" }}>
								<TextField
									label='Código del cliente'
									InputProps={{
										endAdornment: (
											<InputAdornment>
												<IconButton>
													<Search />
												</IconButton>
											</InputAdornment>
										),
									}}
									fullWidth
									variant='outlined'
									onChange={showChange}
									required
								/>
								<TransitionsModal open={open} handleClose={handleClose} />
							</form>
						</div>
					</Paper>
				</Grow>
			)}
			{currentView === 1 && (
				<Grow in>
					<Paper elevation={5}>
						<DataHouse />
						<Button
							onClick={() => setView(0)}
							variant='contained'
							color='secondary'
							style={{marginBottom: '1rem', marginLeft: '1rem'}}
							>
							Volver
						</Button>
					</Paper>
				</Grow>
			)}
		</>
	);
}
