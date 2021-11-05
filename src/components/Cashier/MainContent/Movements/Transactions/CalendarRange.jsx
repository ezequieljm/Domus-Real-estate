import React from "react";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	spaceRight: {
		marginRight: "3rem",
	},
}));

export default function CalendarRange({ setList }) {
	const [originDate, handleDateChange] = React.useState(new Date());
	const [destinyDate, handleDestiny] = React.useState(new Date());
	const classes = useStyles();
	return (
		<>
			<Typography variant='h6' style={{ marginTop: "1rem" }}>
				Seleccione un rango de fechas
			</Typography>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginBottom: "1rem",
					marginTop: "1rem",
				}}>
				<Typography variant='h6' className={classes.spaceRight}>
					Desde
				</Typography>
				<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
					<KeyboardDatePicker
						placeholder='2018/10/10'
						value={originDate}
						onChange={(date) => handleDateChange(date)}
						format='dd/MM/yyyy'
						helperText='Ingrese una fecha '
						className={classes.spaceRight}
					/>
				</MuiPickersUtilsProvider>
				<Typography variant='h6' className={classes.spaceRight}>
					Hasta
				</Typography>
				<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
					<KeyboardDatePicker
						placeholder='2018/10/10'
						value={destinyDate}
						onChange={(date) => handleDestiny(date)}
						format='dd/MM/yyyy'
						helperText='Ingrese una fecha '
					/>
				</MuiPickersUtilsProvider>
				<Button
					variant='contained'
					color='primary'
					style={{ marginLeft: "2rem" }}
          onClick={() => setList(1)}>
					Mostrar
				</Button>
			</div>
		</>
	);
}
