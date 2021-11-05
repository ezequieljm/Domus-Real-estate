import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	TableRow,
	TableHead,
	Button,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	IconButton,
	Collapse,
	Box,
	Typography,
	Grow,
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import CalendarRange from "./CalendarRange";
import InputLabel from '@material-ui/core/InputLabel';

const useRowStyles = makeStyles((theme) => ({
	root: {
		/* 		"& > *": {
			borderBottom: "unset",
		}, */
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function createDataBuy(number, buyer, ower, house, date, amount) {
	return {
		number,
		buyer,
		ower,
		house,
		date,
		amount,
		history: [
			{
				kindOfBuy: "Financiada",
				commission: "34.09%",
				priceHouse: "1000322",
				coin: "$ USD",
				wayPay: "Caja de ahorro",
			},
		],
	};
}

const rowsBuy = [
	createDataBuy("#AC345", "Bombom", "Dexter", "#FA234", "05/09/2021", 3.99),
	createDataBuy("#AC345", "Bombom", "Dexter", "#FA234", "05/09/2021", 3.99),
	createDataBuy("#AC345", "Bombom", "Dexter", "#FA234", "05/09/2021", 3.99),
	createDataBuy("#AC345", "Bombom", "Dexter", "#FA234", "05/09/2021", 3.99),
];

function RowBuy(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();
	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton size='small' onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.number}
				</TableCell>
				<TableCell align='right'>{row.buyer}</TableCell>
				<TableCell align='right'>{row.ower}</TableCell>
				<TableCell align='right'>{row.house}</TableCell>
				<TableCell align='right'>{row.date}</TableCell>
				<TableCell align='right'>{row.amount}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography variant='h6' gutterBottom component='div'>
								{`Transacción ${row.number}`}
							</Typography>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell>Tipo de venta</TableCell>
										<TableCell>Comisión</TableCell>
										<TableCell align='right'>Precio Real</TableCell>
										<TableCell align='right'>Moneda</TableCell>
										<TableCell align='right'>Forma de pago</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.kindOfBuy}>
											<TableCell component='th' scope='row'>
												{historyRow.kindOfBuy}
											</TableCell>
											<TableCell>{historyRow.commission}</TableCell>
											<TableCell align='right'>
												{historyRow.priceHouse}
											</TableCell>
											<TableCell align='right'>{historyRow.coin}</TableCell>
											<TableCell align='right'>{historyRow.wayPay}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

function ListBuy() {
	return (
		<Grow in>
			<TableContainer component={Paper}>
				<Table>
					<TableHead style={{ background: "#80cbc4" }}>
						<TableRow>
							<TableCell />
							<TableCell>Número</TableCell>
							<TableCell align='right'>Comprador</TableCell>
							<TableCell align='right'>Propietario</TableCell>
							<TableCell align='right'>Inmueble</TableCell>
							<TableCell align='right'>Fecha</TableCell>
							<TableCell align='right'>Monto</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell style={{ background: "#90caf9", fontSize: "1rem" }}>
								Entradas
							</TableCell>
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
						</TableRow>
						{rowsBuy.map((row) => (
							<RowBuy key={row.name} row={row} />
						))}
						<TableRow>
							<TableCell colSpan={5}></TableCell>
							<TableCell colSpan={1}>Subtotal</TableCell>
							<TableCell align='right'>
								{rowsBuy.reduce((acc, curr) => acc + curr.amount, 0)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell />
						</TableRow>
						<TableRow>
							<TableCell style={{ background: "#90caf9", fontSize: "1rem" }}>
								Salidas
							</TableCell>
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
						</TableRow>
						{rowsBuy.map((row) => (
							<RowBuy key={row.name} row={row} />
						))}
						<TableRow>
							<TableCell colSpan={5}></TableCell>
							<TableCell colSpan={1}>Subtotal</TableCell>
							<TableCell align='right'>
								{rowsBuy.reduce((acc, curr) => acc + curr.amount, 0)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell colSpan={5}></TableCell>
							<TableCell colSpan={1}>Total general</TableCell>
							<TableCell align='right'>
								{rowsBuy.reduce((acc, curr) => acc + curr.amount, 0) * 2}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Grow>
	);
}

function createDataRental(number, occupant, house, date, amount) {
	return {
		number,
		occupant,
		house,
		date,
		amount,
		history: [
			{
				mounth: "Mayo",
				year: "2021",
				mora: "4.322%",
				wayPay: "Cuenta Corriente",
				id: "1109821",
			},
		],
	};
}

const rowsRental = [
	createDataRental("#AC345", "Mojo jojo", "#FA987", "05/09/2021", 3.99),
	createDataRental("#AC345", "Mojo jojo", "#FA987", "05/09/2021", 3.99),
	createDataRental("#AC345", "Mojo jojo", "#FA987", "05/09/2021", 3.99),
	createDataRental("#AC345", "Mojo jojo", "#FA987", "05/09/2021", 3.99),
];

function RowRental(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();
	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.number}
				</TableCell>
				<TableCell align='right'>{row.occupant}</TableCell>
				<TableCell align='right'>{row.house}</TableCell>
				<TableCell align='right'>{row.date}</TableCell>
				<TableCell align='right'>{row.amount}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography variant='h6' gutterBottom component='div'>
								{`Transacción ${row.number}`}
							</Typography>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell>Mes</TableCell>
										<TableCell>Año</TableCell>
										<TableCell align='right'>Interes por mora</TableCell>
										<TableCell align='right'>Forma de pago</TableCell>
										<TableCell align='right'>Cuenta</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.mounth}>
											<TableCell component='th' scope='row'>
												{historyRow.mounth}
											</TableCell>
											<TableCell>{historyRow.year}</TableCell>
											<TableCell align='right'>{historyRow.mora}</TableCell>
											<TableCell align='right'>{historyRow.wayPay}</TableCell>
											<TableCell align='right'>{historyRow.id}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

function ListRental() {
	return (
		<Grow in>
			<TableContainer component={Paper}>
				<Table>
					<TableHead style={{ background: "#80cbc4" }}>
						<TableRow>
							<TableCell />
							<TableCell>Número</TableCell>
							<TableCell align='right'>Inquilino</TableCell>
							<TableCell align='right'>Inmueble</TableCell>
							<TableCell align='right'>Fecha</TableCell>
							<TableCell align='right'>Monto</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell style={{ background: "#90caf9", fontSize: "1rem" }}>
								Entradas
							</TableCell>
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
						</TableRow>
						{rowsRental.map((row) => (
							<RowRental key={row.number} row={row} />
						))}
						<TableRow>
							<TableCell colSpan={4} />
							<TableCell>Subtotal</TableCell>
							<TableCell>
								{rowsRental.reduce((acc, curr) => acc + curr.amount, 0)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell style={{ background: "#90caf9", fontSize: "1rem" }}>
								Salidas
							</TableCell>
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
							<TableCell />
						</TableRow>
						{rowsRental.map((row) => (
							<RowRental key={row.number} row={row} />
						))}
						<TableRow>
							<TableCell colSpan={4} />
							<TableCell>Subtotal</TableCell>
							<TableCell>
								{rowsRental.reduce((acc, curr) => acc + curr.amount, 0)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell colSpan={4} />
							<TableCell>Total Ingresos</TableCell>
							<TableCell>
								{rowsRental.reduce((acc, curr) => acc + curr.amount, 0) * 2}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Grow>
	);
}

export default function CashDeskClosing() {
	const [showList, setList] = React.useState(0);
	const [showReport, setShowReport] = React.useState(0);

	const classes = useStyles()

	const handleReportChange = (event) => {
    setList(event.target.value);
		setShowReport(0);
  }

	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginBottom: "1rem",
					}}>
					<Typography variant='h4' style={{ marginRight: "2rem" }}>
						Reportes de Transacciones
					</Typography>
				</div>
				<CalendarRange />

				<div>
					<Typography variant='h6' style={{ marginTop: "1rem" }}>
					Seleccione un tipo de reporte
					</Typography>
					<div
						style={{
							display: "flex",
							justifyContent: "left",
							alignItems: "left",
							marginBottom: "1rem",
							marginTop: "1rem",
						}}>
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={showList}
								onChange={handleReportChange}
								label="Tipo"
							>
								<MenuItem value={1}>Alquileres</MenuItem>
								<MenuItem value={2}>Ventas</MenuItem>
								<MenuItem value={3}>Entradas/Salidas</MenuItem>
							</Select>
						</FormControl>
						<div style={{ padding: "1rem" }}>
							<Button type='submit' variant='contained' color='primary' onClick={() => setShowReport(1)}>Generar</Button>
						</div>
					</div>
				</div>
				{ showReport === 1 && (
					<>
						{ showList === 1 && (
							<>
								<div style={{ display: "flex", padding: "1rem" }}>
									<div style={{ padding: "1rem" }}>
										<Typography variant='h5'>
											Reporte de Alquileres
										</Typography>
									</div>
									<div style={{ padding: "1rem" }}>
										<Button type='submit' variant='contained' color='primary'>Imprimir</Button>
									</div>
									<div style={{ padding: "1rem" }}>
										<Button type='submit' variant='contained' color='primary'>Guardar en PDF</Button>
									</div>
								</div>
								<ListRental />
							</>
						)}

						{ showList === 2 && (
							<>
								<div style={{ display: "flex", padding: "1rem" }}>
									<div style={{ padding: "1rem" }}>
										<Typography variant='h5'>
											Reporte de Ventas
										</Typography>
									</div>
									<div style={{ padding: "1rem" }}>
										<Button type='submit' variant='contained' color='primary'>Imprimir</Button>
									</div>
									<div style={{ padding: "1rem" }}>
										<Button type='submit' variant='contained' color='primary'>Guardar en PDF</Button>
									</div>
								</div>
								<ListBuy />
							</>
						)}

						{ showList === 3 && (
							<>
								<div style={{ display: "flex", padding: "1rem" }}>
									<div style={{ padding: "1rem" }}>
										<Typography variant='h5'>
											Reportes de Entradas/Salidas
										</Typography>
									</div>
									<div style={{ padding: "1rem" }}>
										<Button type='submit' variant='contained' color='primary'>Imprimir</Button>
									</div>
									<div style={{ padding: "1rem" }}>
										<Button type='submit' variant='contained' color='primary'>Guardar en PDF</Button>
									</div>
								</div>
								<ListBuy />
							</>
						)}
					</>
				)}
			</Paper>
		</Grow>
	);
}
