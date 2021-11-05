import React from "react";
import { Typography, Grow, Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { materialTheme, CalendarVertical } from "../DatePicker/DatePicker";
import { ThemeProvider } from "@material-ui/styles";
import DetailedAccordion from "./ListAppointment/DetailAccordion";

export default function EditAnAppointment() {
	return (
		<>
			<Grow in>
				<Paper elevation={5} style={{ padding: "1rem" }}>
					<Typography variant='h4' style={{ marginBottom: "1rem" }}>
						Agenda
					</Typography>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div style={{ maxWidth: "70%", minWidth: "65%", padding: "1rem" }}>
							<Typography
								variant='h5'
								color='primary'
								style={{ marginBottom: "1rem" }}>
								Actividades Mie May 05
							</Typography>
							<div style={{ overflow: "auto" }}>
								<DetailedAccordion />
							</div>
						</div>
						<div style={{ maxWidth: "35%" }}>
							<ThemeProvider theme={materialTheme}>
								<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
									<CalendarVertical disableToolbar />
								</MuiPickersUtilsProvider>
							</ThemeProvider>
						</div>
					</div>
				</Paper>
			</Grow>
		</>
	);
}
