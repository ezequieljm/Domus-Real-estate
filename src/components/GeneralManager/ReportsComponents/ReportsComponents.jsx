import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, Button, Grow } from "@material-ui/core";
import { PictureAsPdf, ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		minWidth: "200px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	hover: {
		"&:hover": {
			backgroundColor: "rgb(7, 177, 77, 0.42)",
		},
		cursor: "pointer",
	},
}));

const reportsSale = [
	"Ventas 15/05/2021",
	"Ventas 14/05/2021",
	"Ventas 13/05/2021",
	"Ventas 12/05/2021",
	"Ventas 11/05/2021",
	"Ventas 10/05/2021",
	"Ventas 09/05/2021",
	"Ventas 08/05/2021",
	"Ventas 07/05/2021",
	"Ventas 06/05/2021",
	"Ventas 05/05/2021",
	"Ventas 04/05/2021",
];

const reportsRental = [
	"Alquiler 29/04/2021",
	"Alquiler 29/03/2021",
	"Alquiler 28/02/2021",
	"Alquiler 29/01/2021",
	"Alquiler 29/12/2020",
	"Alquiler 29/11/2020",
	"Alquiler 29/10/2020",
];

const reportsClient = [
	"Clientes 29/04/2021",
	"Clientes 29/03/2021",
	"Clientes 28/02/2021",
	"Clientes 29/01/2021",
	"Clientes 29/12/2020",
	"Clientes 29/11/2020",
	"Clientes 29/10/2020",
];

const reportsHouse = [
	"Propiedades 29/04/2021",
	"Propiedades 29/03/2021",
	"Propiedades 28/02/2021",
	"Propiedades 29/01/2021",
	"Propiedades 29/12/2020",
	"Propiedades 29/11/2020",
	"Propiedades 29/10/2020",
];
export function ReportsSale({ showList }) {
	const classes = useStyles();

	return (
		<Grow in>
			<div className={classes.root}>
				<Grid container spacing={3}>
					{reportsSale.map((report) => (
						<Grid item xs={12} sm={6} md={3} key={report}>
							<Paper className={`${classes.paper} ${classes.hover}`}>
								<Typography variant='h6'>{report}</Typography>

								<div style={{ display: "flex" }}>
									<Button
										onClick={() => alert("Download Report")}>
										<PictureAsPdf
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
									<Button
										style={{ marginLeft: ".5rem" }}
										onClick={() => showList(2)}>
										<ArrowForwardIos
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
								</div>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		</Grow>
	);
}

export function ReportsRental({ showList }) {
	const classes = useStyles();

	return (
		<Grow in>
			<div className={classes.root}>
				<Grid container spacing={3}>
					{reportsRental.map((report) => (
						<Grid item xs={12} sm={6} md={3} key={report}>
							<Paper className={`${classes.paper} ${classes.hover}`}>
								<Typography variant='h6'>{report}</Typography>
								<div style={{ display: "flex" }}>
									<Button
										onClick={() => alert("Download Report")}>
										<PictureAsPdf
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
									<Button
										style={{ marginLeft: ".5rem" }}
										onClick={() => showList(2)}>
										<ArrowForwardIos
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
								</div>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		</Grow>
	);
}

export function ReportsClients({ showList }) {
	const classes = useStyles();

	return (
		<Grow in>
			<div className={classes.root}>
				<Grid container spacing={3}>
					{reportsClient.map((report) => (
						<Grid item xs={12} sm={6} md={3} key={report}>
							<Paper className={`${classes.paper} ${classes.hover}`}>
								<Typography variant='h6'>{report}</Typography>
								<div style={{ display: "flex" }}>
									<Button
										onClick={() => alert("Download Report")}>
										<PictureAsPdf
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
									<Button
										style={{ marginLeft: ".5rem" }}
										onClick={() => showList(2)}>
										<ArrowForwardIos
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
								</div>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		</Grow>
	);
}
export function ReportsHouses({ showList }) {
	const classes = useStyles();

	return (
		<Grow in>
			<div className={classes.root}>
				<Grid container spacing={3}>
					{reportsHouse.map((report) => (
						<Grid item xs={12} sm={6} md={3} key={report}>
							<Paper className={`${classes.paper} ${classes.hover}`}>
								<Typography variant='h6'>{report}</Typography>
								<div style={{ display: "flex" }}>
									<Button
										onClick={() => alert("Download Report")}>
										<PictureAsPdf
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
									<Button
										style={{ marginLeft: ".5rem" }}
										onClick={() => showList(2)}>
										<ArrowForwardIos
											style={{ fontSize: "2rem", color: "green" }}
										/>
									</Button>
								</div>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		</Grow>
	);
}
