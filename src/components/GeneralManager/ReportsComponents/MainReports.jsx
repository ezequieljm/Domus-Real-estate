import React from "react";
import { Typography, Paper } from "@material-ui/core";
import {
	ReportsSale,
	ReportsRental,
	ReportsClients,
	ReportsHouses,
} from "./ReportsComponents";
import CalendarOfReports from "./CalendarOfReports";
import CustomizedRadios from "./RadioGroup";
import ListReport from "./ListReport";
import { Grow } from "@material-ui/core";

export default function MainReports() {
	const [typeOfReport, setReport] = React.useState("");
	const [showReportOrList, setRepList] = React.useState(0);

	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<Typography variant='h4'>Reportes</Typography>
				<div>
					<CalendarOfReports />
					<CustomizedRadios setReport={setReport} setRepList={setRepList} />
				</div>
				{showReportOrList === 1 && (
					<div>
						{typeOfReport === "ventas" && <ReportsSale showList={setRepList} />}
						{typeOfReport === "alquileres" && (
							<ReportsRental showList={setRepList} />
						)}
						{typeOfReport === "clientes" && (
							<ReportsClients showList={setRepList} />
						)}
						{typeOfReport === "propiedades" && (
							<ReportsHouses showList={setRepList} />
						)}
					</div>
				)}
				{showReportOrList === 2 && (
					<ListReport setRepList={setRepList} typeOfReport={typeOfReport} />
				)}
			</Paper>
		</Grow>
	);
}
