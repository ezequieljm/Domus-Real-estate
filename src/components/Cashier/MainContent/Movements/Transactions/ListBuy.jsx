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

function createData(number, buyer, ower, house, date, amount) {
	return { number, buyer, ower, house, date, amount };
}

const rowsEntry = [
	createData(
		"#AD8765",
		"Johnny Bravo",
		"Donald Trump",
		"#FA0000",
		"07/05/2021",
		765432.99
	),
	createData(
		"#AD8765",
		"Johnny Bravo",
		"Donald Trump",
		"#FA0000",
		"07/05/2021",
		792345.99
	),
	createData(
		"#AD8765",
		"Johnny Bravo",
		"Donald Trump",
		"#FA0000",
		"07/05/2021",
		234433.99
	),
	createData(
		"#AD8765",
		"Johnny Bravo",
		"Donald Trump",
		"#FA0000",
		"07/05/2021",
		100000.99
	),
];

export default function ListBuy() {
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
								<TableCell align='right'>Comprador</TableCell>
								<TableCell align='right'>Propietario</TableCell>
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
								<TableCell />
							</TableRow>
							{rowsEntry.map((row) => (
								<TableRow key={row.number}>
									<TableCell component='th' scope='row'>
										{row.number}
									</TableCell>
									<TableCell align='right'>{row.buyer}</TableCell>
									<TableCell align='right'>{row.ower}</TableCell>
									<TableCell align='right'>{row.house}</TableCell>
									<TableCell align='right'>{row.date}</TableCell>
									<TableCell align='right'>{row.amount}</TableCell>
								</TableRow>
							))}
							<TableRow>
								<TableCell />
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
								<TableCell />
							</TableRow>
							{rowsEntry.map((row) => (
								<TableRow key={row.number}>
									<TableCell component='th' scope='row'>
										{row.number}
									</TableCell>
									<TableCell align='right'>{row.buyer}</TableCell>
									<TableCell align='right'>{row.ower}</TableCell>
									<TableCell align='right'>{row.house}</TableCell>
									<TableCell align='right'>{row.date}</TableCell>
									<TableCell align='right'>{row.amount}</TableCell>
								</TableRow>
							))}
							<TableRow>
								<TableCell />
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
