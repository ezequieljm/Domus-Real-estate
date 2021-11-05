import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import CalendarOfReports from "./ReportsComponents/CalendarOfReports";
import ClientReports from "./ReportsComponents/ListReports/ClientReports";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		// border: "1px solid black",
	},
	calendarReports: {
		// border: "1px solid black",
	},
}));

export default function MainReports() {
	const classes = useStyles();
	const [showReport, setShowReport] = React.useState(0);

	return (
		<>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<Typography variant='h4'>Reportes de Clientes</Typography>
				<div className={`${classes.root} ${classes.calendarReports}`}>
					<CalendarOfReports />
					<div style={{ marginBottom: '1rem', padding: "1rem" }}>
						<Button type='submit' variant='contained' color='primary' onClick={() => setShowReport(1)}>Generar</Button>
					</div>
					{ showReport === 1 && (
						<div>
							<ClientReports />
							<div style={{ display: "flex" }}>
								<div style={{ padding: "1rem" }}>
									<Button type='submit' variant='contained' color='primary'>Imprimir</Button>
								</div>
								<div style={{ padding: "1rem" }}>
									<Button type='submit' variant='contained' color='primary'>Guardar en PDF</Button>
								</div>
							</div>
						</div>
					)}
				</div>
			</Paper>
		</>
	);
}
