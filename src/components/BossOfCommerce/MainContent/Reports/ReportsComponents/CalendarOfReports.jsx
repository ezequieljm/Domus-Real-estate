import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles"
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectDate() {

	const [originDate, handleDateChange] = React.useState(new Date());
	const classes = useStyles();

	return(
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
	)
}

function SelectMonth() {
	const classes = useStyles();
  const [month, setMonth] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="input-month">Mes</InputLabel>
					<Select
						labelId="slect-month-label"
						id="select-month"
						value={month}
						onChange={handleChange}
						label="Mes"
					>
						<MenuItem value={0}>Enero</MenuItem>
						<MenuItem value={1}>Febrero</MenuItem>
						<MenuItem value={2}>Marzo</MenuItem>
						<MenuItem value={3}>Abril</MenuItem>
						<MenuItem value={4}>Mayo</MenuItem>
						<MenuItem value={5}>Junio</MenuItem>
						<MenuItem value={6}>Julio</MenuItem>
						<MenuItem value={7}>Agosto</MenuItem>
						<MenuItem value={8}>Septiembre</MenuItem>
						<MenuItem value={9}>Octubre</MenuItem>
						<MenuItem value={10}>Noviembre</MenuItem>
						<MenuItem value={11}>Diciembre</MenuItem>
					</Select>
				</FormControl>
		</div>
	)
}

function SelectYear() {
	const classes = useStyles();
  const [year, setYear] = React.useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="input-year">Año</InputLabel>
					<Select
						labelId="slect-year-label"
						id="select-year"
						value={year}
						onChange={handleChange}
						label="Año"
					>
						<MenuItem value={0}>2005</MenuItem>
						<MenuItem value={1}>2006</MenuItem>
						<MenuItem value={2}>2007</MenuItem>
						<MenuItem value={3}>2008</MenuItem>
						<MenuItem value={4}>2009</MenuItem>
						<MenuItem value={5}>2010</MenuItem>
						<MenuItem value={6}>2011</MenuItem>
						<MenuItem value={7}>2013</MenuItem>
						<MenuItem value={8}>2014</MenuItem>
						<MenuItem value={9}>2015</MenuItem>
						<MenuItem value={10}>2016</MenuItem>
						<MenuItem value={11}>2017</MenuItem>
						<MenuItem value={12}>2018</MenuItem>
						<MenuItem value={13}>2019</MenuItem>
						<MenuItem value={14}>2020</MenuItem>
						<MenuItem value={15}>2021</MenuItem>
					</Select>
				</FormControl>
		</div>
	)
}

export default function SimpleSelect() {
  const classes = useStyles();
  const [tipo, setTipo] = React.useState('');

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

	return (
		<>
			<Typography variant='h5' style={{ marginTop: "1rem" }}>
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
						value={tipo}
						onChange={handleChange}
						label="Tipo"
					>
						<MenuItem value={0}>Diario</MenuItem>
						<MenuItem value={1}>Mensual</MenuItem>
						<MenuItem value={2}>Anual</MenuItem>
					</Select>
				</FormControl>
				{tipo === 0 
				? ( <SelectDate /> )
				: tipo === 1
				? ( <SelectMonth /> )
				: tipo === 2
				? ( <SelectYear /> )
				: ( <></> )
				}
			</div>
		</>
	);
}
