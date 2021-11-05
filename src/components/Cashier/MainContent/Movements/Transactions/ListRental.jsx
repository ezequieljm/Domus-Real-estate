import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Grow,
} from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(number, occupant, ower, date, amount) {
	return { number, occupant, ower, date, amount };
}

const rowsEntry = [
	createData("#AE8765", "Johnny Bravo", "#FA9876", "06/04/2021", 7654.99),
	createData("#AE7653", "Leonel Messi", "#FA9323", "06/04/2021", 7532.99),
	createData("#AE9862", "Cristiano Ronaldo", "#FA9235", "06/04/2021", 8769.99),
	createData("#A64533", "Tom Cruise", "#FA9673", "06/04/2021", 6534.99),
];

export default function ListRental() {
	const classes = useStyles();

	return (
		<Grow in>
			<Paper elevation={5} style={{ maxHeight: "600px" }}>
				<TableContainer
					component={Paper}
					style={{ maxHeight: "600px", overflow: "auto" }}>
					<Table className={classes.table} stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell>Número</TableCell>
								<TableCell align='right'>Inquilino</TableCell>
								<TableCell align='right'>Inmueble</TableCell>
								<TableCell align='right'>Fecha</TableCell>
								<TableCell align='right'>Monto</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow style={{ background: "#90caf9" }}>
								<TableCell style={{ fontSize: "1rem" }}>Entradas</TableCell>
								<TableCell />
								<TableCell />
								<TableCell />
								<TableCell />
							</TableRow>
							{rowsEntry.map((row) => (
								<TableRow key={row.number}>
									<TableCell component='th' scope='row'>
										{row.number}
									</TableCell>
									<TableCell align='right'>{row.occupant}</TableCell>
									<TableCell align='right'>{row.ower}</TableCell>
									<TableCell align='right'>{row.date}</TableCell>
									<TableCell align='right'>{row.amount}</TableCell>
								</TableRow>
							))}
							<TableRow>
								<TableCell />
								<TableCell />
								<TableCell style={{ fontSize: "1rem" }} align='right'>
									Subtotal
								</TableCell>
								<TableCell />
								<TableCell style={{ fontSize: "1rem" }} align='right'>
									{rowsEntry.reduce((acc, curr) => acc + curr.amount, 0)}
								</TableCell>
							</TableRow>
							<TableRow style={{ background: "#90caf9" }}>
								<TableCell style={{ fontSize: "1rem" }}>Salidas</TableCell>
								<TableCell />
								<TableCell />
								<TableCell />
								<TableCell />
							</TableRow>
							{rowsEntry.map((row) => (
								<TableRow key={row.number}>
									<TableCell component='th' scope='row'>
										{row.number}
									</TableCell>
									<TableCell align='right'>{row.occupant}</TableCell>
									<TableCell align='right'>{row.ower}</TableCell>
									<TableCell align='right'>{row.date}</TableCell>
									<TableCell align='right'>{row.amount}</TableCell>
								</TableRow>
							))}
							<TableRow>
								<TableCell />
								<TableCell />
								<TableCell style={{ fontSize: "1rem" }} align='right'>
									Subtotal
								</TableCell>
								<TableCell />
								<TableCell style={{ fontSize: "1rem" }} align='right'>
									{rowsEntry.reduce((acc, curr) => acc + curr.amount, 0)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell />
								<TableCell />
								<TableCell style={{ fontSize: "1rem" }} align='right'>
									Total Neto
								</TableCell>
								<TableCell />
								<TableCell style={{ fontSize: "1rem" }} align='right'>
									{rowsEntry.reduce((acc, curr) => acc + curr.amount, 0) * 2}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Grow>
	);
}
