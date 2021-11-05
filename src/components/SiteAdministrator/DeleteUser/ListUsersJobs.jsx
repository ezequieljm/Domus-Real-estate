import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Fade, Modal, Backdrop } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
	},
	contentTable: {
		height: 400,
		overflow: "auto",
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

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const createData = (firstname, surname, username, id, job, deleted) => 
    ({ username, firstname, surname, id, job, deleted })

const rowsManage = [
	createData("Felipe", "Ruiz", "felipeRuiz", "DF345", "Gerente", "NO"),
];

const rowsAdministrator = [
	createData(
		"Fox",
		"Mulder",
		"foxMulder",
		"AC345",
		"Administrador del Sitio",
		"NO"
	),
	createData("Micaela", "Sheffer", "micaela", "AC235", "Jefa", "NO"),
];

const rowsCommerce = [
	createData("Jorgelina", "Stevez", "jorgelina", "CF345", "Jefa", "NO"),
	createData("Simon", "Nelson-Cook", "cookie", "CF335", "Marketing", "NO"),
	createData("Liliana", "Gordon", "liliana", "CF769", "Cajera", "NO"),
	createData("Ned", "Bigby", "nedBigby", "AF345", "Agente inmobiliario", "NO"),
	createData(
		"Barney",
		"Calhount",
		"barney",
		"AF765",
		"Agente inmobiliario",
		"NO"
	),
	createData("Grodon", "Freeman", "gman", "AF235", "Agente inmobiliario", "NO"),
	createData(
		"John",
		"Prince",
		"johnPrince",
		"AF000",
		"Agente inmobiliario",
		"SI"
	),
];

const TransitionsModal = ({ titleDesc }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				color={titleDesc === "Deshabilitar" ? "secondary" : "primary"}
				onClick={handleOpen}>
				{titleDesc}
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
						<h2 id='transition-modal-title'>
							{titleDesc === "Deshabilitar"
								? "Usuario deshabilitado"
								: "Usuario habilitado"}
						</h2>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

/**
 * Main Component: ListUsersJobs
 */
const ListUsersJobs = () => {
	const classes = useStyles();

	return (
		<TableContainer className={classes.contentTable} component={Paper}>
			<Table stickyHeader className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Código</TableCell>
						<TableCell align='right'>Nombre y Apellido</TableCell>
						<TableCell align='right'>Usuario</TableCell>
						<TableCell align='right'>Puesto</TableCell>
						<TableCell align='right'></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow style={{ background: "#ce93d8" }}>
						<TableCell>Gerencia</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
					{rowsManage.map((row) => (
						<StyledTableRow key={row.id}>
							<StyledTableCell component='th' scope='row'>
								{row.firstname}
							</StyledTableCell>
							<StyledTableCell align='right'>{row.surname}</StyledTableCell>
							<StyledTableCell align='right'>{row.username}</StyledTableCell>
							<StyledTableCell align='right'>{row.job}</StyledTableCell>
							<StyledTableCell align='right'>
								{row.deleted === "NO" && (
									<Button color='secondary'>Deshabilitar</Button>
								)}
								{row.deleted !== "NO" && (
									<Button color='primary'>Habilitar</Button>
								)}
							</StyledTableCell>
						</StyledTableRow>
					))}
					<br />
					<TableRow style={{ background: "#64b5f6" }}>
						<TableCell>Administración</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
					{rowsAdministrator.map((row) => (
						<StyledTableRow key={row.id}>
							<StyledTableCell component='th' scope='row'>
								{row.firstname}
							</StyledTableCell>
							<StyledTableCell align='right'>{row.surname}</StyledTableCell>
							<StyledTableCell align='right'>{row.username}</StyledTableCell>
							<StyledTableCell align='right'>{row.job}</StyledTableCell>
							<StyledTableCell align='right'>
								{row.deleted === "NO" && (
									<Button color='secondary'>Deshabilitar</Button>
								)}
								{row.deleted !== "NO" && (
									<Button color='primary'>Habilitar</Button>
								)}
							</StyledTableCell>
						</StyledTableRow>
					))}
					<br />
					<TableRow style={{ background: "#80cbc4" }}>
						<TableCell>Comercialización</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
					{rowsCommerce.map((row) => (
						<StyledTableRow key={row.id}>
							<StyledTableCell component='th' scope='row'>
								{row.firstname}
							</StyledTableCell>
							<StyledTableCell align='right'>{row.surname}</StyledTableCell>
							<StyledTableCell align='right'>{row.username}</StyledTableCell>
							<StyledTableCell align='right'>{row.job}</StyledTableCell>
							<StyledTableCell align='right'>
								{row.deleted === "NO" && (
									<TransitionsModal titleDesc='Deshabilitar' />
								)}
								{row.deleted !== "NO" && (
									<TransitionsModal titleDesc='Habilitar' />
								)}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default ListUsersJobs;