import React from "react";
import {
	Box,
	Collapse,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Typography,
	Grow,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const createDataSelf = (nameHouse, availability) => ({
	nameHouse,
	availability,
});

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const [stateRow, setStateRow] = React.useState(row);
	const setColorAvailability = (availability) =>
		availability === "Disponible" ? "green" : "red";
	return (
		<React.Fragment>
			<TableRow>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{stateRow.nameHouse}
				</TableCell>
				<TableCell
					align='right'
					style={{ color: setColorAvailability(stateRow.availability) }}>
					{stateRow.availability}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box
							margin={1}
							style={{
								display: "flex",
								justifyContent: "space-around",
								padding: "1rem",
							}}>
							<Button
								variant='contained'
								onClick={() =>
									setStateRow({ ...stateRow, availability: "Disponible" })
								}>
								Disponible
							</Button>
							<Button
								variant='contained'
								onClick={() =>
									setStateRow({ ...stateRow, availability: "No Disponible" })
								}>
								No Disponible
							</Button>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default function ListOfHouses() {
	const rows = [
		createDataSelf("Mansión de Spencer", "Disponible"),
		createDataSelf("Laboratorio sector C", "No Disponible"),
		createDataSelf("Departamento Complejo Lambda", "No Disponible"),
		createDataSelf("Hotel Vista Oceano - Ocean Beach Vice City", "Disponible"),
	];
	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<Typography variant='h4' style={{ marginBottom: "1rem" }}>
					Propiedades
				</Typography>
				<TableContainer component={Paper} elevation={5}>
					<Table aria-label='collapsible table'>
						<TableHead>
							<TableRow>
								<TableCell />
								<TableCell>Propiedad</TableCell>
								<TableCell align='right'>Disponibilidad</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<Row key={row.houseAgent} row={row} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Grow>
	);
}
