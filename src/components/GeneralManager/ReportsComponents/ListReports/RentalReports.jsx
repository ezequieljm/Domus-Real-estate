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
	address,
	locale,
	ower,
	date,
	agent,
	occupant,
	contract,
	price
) {
	return {
		house,
		type,
		address,
		locale,
		ower,
		date,
		agent,
		occupant,
		contract,
		price,
	};
}
const rowsHouse = [
	createRow(
		"111111",
		"Casa",
		"Golf Club 5643",
		"Resistencia",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		9351
	),
	createRow(
		"222222",
		"Casa",
		"Golf Club 5643",
		"Charata",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		4352
	),
];

const rowsDepartament = [
	createRow(
		"111111",
		"Departamento",
		"Golf Club 5643",
		"Resistencia",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		8000
	),
	createRow(
		"222222",
		"Departemento",
		"Golf Club 5643",
		"Charata",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		4000
	),
]

const rowsCabin = [
	createRow(
		"111111",
		"Cabaña",
		"Golf Club 5643",
		"Resistencia",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		9000
	),
	createRow(
		"222222",
		"Cabaña",
		"Golf Club 5643",
		"Charata",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		4000
	),
];

const rowsLocal = [
	createRow(
		"111111",
		"Local",
		"Golf Club 5643",
		"Resistencia",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		9000
	),
	createRow(
		"222222",
		"Local",
		"Golf Club 5643",
		"Charata",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		9000
	),
];

const rowsGarage = [
	createRow(
		"111111",
		"Garage",
		"Golf Club 5643",
		"Resistencia",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		1000
	),
	createRow(
		"222222",
		"Garage",
		"Golf Club 5643",
		"Charata",
		"Maximiliano Fevriel",
		"11/04/2021",
		"Ned Bigby",
		"Johnny Bravo",
		"24 Meses",
		4000
	),
];

const total = rowsHouse.reduce((acc, curr) => acc + Number(curr.price), 0);

export default function RentalReports() {
	const classes = useStyles();
	return (
		<TableContainer component={Paper} className={classes.table}>
			<Table className={classes.table} stickyHeader>
				<TableHead style={{ background: "#9fa8da" }}>
					<TableRow>
						<TableCell>Propiedad</TableCell>
						<TableCell align='right'>Tipo de Inmueble</TableCell>
						<TableCell align='right'>Dirección</TableCell>
						<TableCell align='right'>Localidad</TableCell>
						<TableCell align='right'>Propietario</TableCell>
						<TableCell align='right'>Fecha</TableCell>
						<TableCell align='right'>Agente</TableCell>
						<TableCell align='right'>Inquilino</TableCell>
						<TableCell align='right'>Contrato</TableCell>
						<TableCell align='right'>Precio ($ ARS)</TableCell>
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
					{rowsHouse.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.occupant}</TableCell>
							<TableCell align='right'>{row.contract}</TableCell>
							<TableCell align='right'>{`$ ${row.price}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={8}></TableCell>
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
					{rowsDepartament.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.occupant}</TableCell>
							<TableCell align='right'>{row.contract}</TableCell>
							<TableCell align='right'>{`$ ${row.price}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={8}></TableCell>
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
					{rowsCabin.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.occupant}</TableCell>
							<TableCell align='right'>{row.contract}</TableCell>
							<TableCell align='right'>{`$ ${row.price}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={8}></TableCell>
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
					{rowsLocal.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.occupant}</TableCell>
							<TableCell align='right'>{row.contract}</TableCell>
							<TableCell align='right'>{`$ ${row.price}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={8}></TableCell>
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
					{rowsGarage.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
							<TableCell align='right'>{row.agent}</TableCell>
							<TableCell align='right'>{row.occupant}</TableCell>
							<TableCell align='right'>{row.contract}</TableCell>
							<TableCell align='right'>{`$ ${row.price}`}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={8}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{`$ ${total}`}</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell colSpan={1}>Total General</TableCell>
						<TableCell align='right'>
							{`$ ${total + total + total + total + total} ARS`}
						</TableCell>
					</TableRow>
					<br />
					<br />
				</TableBody>
			</Table>
		</TableContainer>
	);
}
