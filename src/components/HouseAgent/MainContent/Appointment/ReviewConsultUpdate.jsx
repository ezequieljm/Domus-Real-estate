import React from "react";
import { Paper, Grow, Typography, Button } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import { makeStyles } from "@material-ui/core";
import { ListActivity } from "./ListActivity";

const stylesOfDatePicker = makeStyles({
	datePick: {
		maxHeight: 700,
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
	},
});

const StaticDatePicker = () => {
	const classes = stylesOfDatePicker();
	const [date, changeDate] = React.useState(new Date());
	return (
		<div className={classes.datePick}>
			<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
				<DatePicker
					autoOk
					orientation='portrait'
					variant='static'
					openTo='date'
					value={date}
					disableToolbar
					onChange={changeDate}
				/>
			</MuiPickersUtilsProvider>
		</div>
	);
};

const useStyles = makeStyles({
	mainPaper: {
		display: "flex",
		justifyContent: "space-between",
	},
	paperList: {
		width: "65%",
		minWidth: "50%",
		maxHeight: 450,
	},
});

export default function ReviewConsultUpdate() {
	const classes = useStyles();

	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<Typography variant='h4' style={{ padding: "1rem" }}>
					Actividades
				</Typography>
				<div className={classes.mainPaper}>
					<div style={{ width: "23%" }}>
						<Typography
							variant='h5'
							style={{
								background: "#90caf9",
								padding: "1rem",
								marginBottom: "1rem",
								marginTop: ".5rem",
							}}
							component={Paper}
							elevation={5}>
							Lunes 17 de Mayo 2021
						</Typography>
						<StaticDatePicker />
						<Button variant='contained' color='primary' style={{marginTop: '2rem'}}>
							Mostrar
						</Button>
					</div>
					<div style={{ width: "70%" }}>
						<Typography
							variant='h5'
							style={{
								background: "#90caf9",
								padding: "1rem",
								marginBottom: "1rem",
								marginTop: ".5rem",
							}}
							component={Paper}
							elevation={5}>
							Programadas
						</Typography>
						<Paper
							elevation={5}
							className={classes.paperList}
							style={{ width: "100%" }}>
							<ListActivity />
						</Paper>
					</div>
				</div>
			</Paper>
		</Grow>
	);
}
