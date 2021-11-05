import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import {
	Box,
	Collapse,
	IconButton,
	Table,
	TableCell,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Button,
} from "@material-ui/core";
import { rows } from "./CreateDataListActivity";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	pending: {
		color: "#1565c0",
	},
	fulfilled: {
		color: "#2e7d32",
	},
	rejected: {
		color: "#c62828",
	},
	styleBtnRow: {
		marginTop: "1rem",
		width: "230px",
		display: "flex",
		justifyContent: "space-between",
	},
});

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	const setColorStateText = (state) =>
		state === "En Proceso"
			? classes.pending
			: state === "Finalizada"
			? classes.fulfilled
			: classes.rejected;
	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton size='small' onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.kindActv}
				</TableCell>
				<TableCell align='right'>{row.date}</TableCell>
				<TableCell align='right'>{row.hour}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography
								variant='h6'
								gutterBottom
								component='div'
								className={setColorStateText(row.history[0].stateActiviti)}>
								{row.history[0].stateActiviti}
							</Typography>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell>Cliente</TableCell>
										<TableCell>Nombre</TableCell>
										<TableCell align='right'>Apellido</TableCell>
										<TableCell align='right'>Ubicación</TableCell>
										<TableCell align='right'>Teléfono</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.id}>
											<TableCell component='th' scope='row'>
												{historyRow.id}
											</TableCell>
											<TableCell>{historyRow.firstname}</TableCell>
											<TableCell align='right'>{historyRow.surname}</TableCell>
											<TableCell align='right'>{historyRow.location}</TableCell>
											<TableCell align='right'>{historyRow.phone}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							<div className={classes.styleBtnRow}>
								<Button variant='contained'>Finalizar</Button>
								<Button variant='contained'>Cancelar</Button>
							</div>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export function ListActivity() {
	return (
		<TableContainer style={{maxHeight: '450px', overflow: 'auto'}}>
			<Table stickyHeader >
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Actividad</TableCell>
						<TableCell align='right'>Fecha</TableCell>
						<TableCell align='right'>Hora</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.idAct} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
