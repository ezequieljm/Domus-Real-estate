import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 700,
		maxHeight: 500,
	},
});

function createRow(
	house,
	type,
	saleDate,
	locale,
	agent,
	buyer,
	ower,
	wayToPay,
	amount
) {
	return {
		house,
		type,
		saleDate,
		locale,
		agent,
		buyer,
		ower,
		wayToPay,
		amount,
	};
}
const rows = [
	createRow(
		"1223",
		"Casa",
		"11/04/2021",
		"Resistencia",
		"Ned Bigby",
		"Donald Trump",
		"Johnny Bravo",
		"Contado",
		"340000"
	),
	createRow(
		"7896",
		"Casa",
		"11/04/2021",
		"Charata",
		"Gordon Freeman",
		"Bugs Bunny",
		"Mojo jojo",
		"Financiado",
		"876897"
	),
	createRow(
		"2323",
		"Casa",
		"11/04/2021",
		"Margarita Belen",
		"John Prince",
		"García Orozco",
		"Timmy Turner",
		"Cuenta Corriente",
		"100000"
	),
];

const total = rows.reduce((acc, curr) => acc + Number(curr.amount), 0);

export default function SaleList() {
	const classes = useStyles();
	return (
		<TableContainer component={Paper} className={classes.table}>
			<Table className={classes.table} stickyHeader>
				<TableHead style={{ background: "#9fa8da" }}>
					<TableRow>
						<TableCell>Propiedad</TableCell>
						<TableCell align='right'>Tipo de Inmueble</TableCell>
						<TableCell align='right'>Fecha</TableCell>
						<TableCell align='right'>Localidad</TableCell>
						<TableCell align='right'>Agente</TableCell>
						<TableCell align='right'>Comprador</TableCell>
						<TableCell align='right'>Propietario</TableCell>
						<TableCell align='right'>Forma de pago</TableCell>
						<TableCell align='right'>Monto ($ UDS)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>
							<Typography variant='h6'>Casa</Typography>
						</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.saleDate}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.buyer}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.wayToPay}</TableCell>
							<TableCell align='right'>{`$ ${row.amount}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={7}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{`$ ${total}`}</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell>
							<Typography variant='h6'>Departamento</Typography>
						</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>Departamento</TableCell>
							<TableCell align='right'>{row.saleDate}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.buyer}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.wayToPay}</TableCell>
							<TableCell align='right'>{`$ ${row.amount}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={7}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{`$ ${total}`}</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell>
							<Typography variant='h6'>Cabaña</Typography>
						</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>Cabaña</TableCell>
							<TableCell align='right'>{row.saleDate}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.buyer}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.wayToPay}</TableCell>
							<TableCell align='right'>{`$ ${row.amount}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={7}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{`$ ${total}`}</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell>
							<Typography variant='h6'>Local</Typography>
						</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>Local</TableCell>
							<TableCell align='right'>{row.saleDate}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.buyer}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.wayToPay}</TableCell>
							<TableCell align='right'>{`$ ${row.amount}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={7}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{`$ ${total}`}</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell>
							<Typography variant='h6'>Cochera</Typography>
						</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>Cochera</TableCell>
							<TableCell align='right'>{row.saleDate}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.buyer}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.wayToPay}</TableCell>
							<TableCell align='right'>{`$ ${row.amount}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={7}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{`$ ${total}`}</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell colSpan={1}>Total General</TableCell>
						<TableCell align='right'>
							{`$ ${total + total + total + total + total} USD`}
						</TableCell>
					</TableRow>
					<br />
					<br />
				</TableBody>
			</Table>
		</TableContainer>
	);
}
