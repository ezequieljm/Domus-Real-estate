import React from "react";
import {
	InputAdornment,
	TextField,
	makeStyles,
	Button,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
	rootDiv: {
		width: "80%",
		height: "120px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	btn: {
		width: "20%",
	},
});

export default function MakeQueryOfClient({ changeInput, handleOpen }) {
	const classes = useStyles();
	const showChange = (e) => changeInput(e.currentTarget.value);
	return (
		<form className={classes.rootDiv} onSubmit={(e) => handleOpen(e)}>
			<TextField
				label='Nombre y Apellido o Código del cliente'
				InputProps={{
					endAdornment: (
						<InputAdornment>
							<IconButton>
								<Search />
							</IconButton>
						</InputAdornment>
					),
				}}
				fullWidth
				variant='outlined'
				onChange={showChange}
				required
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.btn}>
				Buscar
			</Button>
		</form>
	);
}
