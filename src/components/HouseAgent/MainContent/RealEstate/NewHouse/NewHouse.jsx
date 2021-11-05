import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
	Typography,
	Grow,
	Paper,
	FormControl,
	InputLabel,
	Button,
	FormGroup,
	FormControlLabel,
	Checkbox,
	RadioGroup,
	Radio,
	TextField,
	Fade,
	Modal,
	Backdrop,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formCtrl: {
		display: "flex",
		flexDirection: "row",
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

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		"&$checked": {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color='default' {...props} />);

function CheckboxLabels() {
	const [service, setService] = React.useState({
		luz: false,
		agua: false,
		internet: false,
		television: false,
	});

	const handleChangeService = (e) => {
		setService({ ...service, [e.target.name]: e.target.checked });
	};

	return (
		<FormGroup row>
			<FormControlLabel
				control={
					<GreenCheckbox
						checked={service.luz}
						onChange={handleChangeService}
						name='luz'
					/>
				}
				label='Luz'
			/>
			<FormControlLabel
				control={
					<GreenCheckbox
						checked={service.agua}
						onChange={handleChangeService}
						name='agua'
					/>
				}
				label='Agua'
			/>
			<FormControlLabel
				control={
					<GreenCheckbox
						checked={service.internet}
						onChange={handleChangeService}
						name='internet'
					/>
				}
				label='Internet'
			/>
			<FormControlLabel
				control={
					<GreenCheckbox
						checked={service.television}
						onChange={handleChangeService}
						name='television'
					/>
				}
				label='Televisión'
			/>
		</FormGroup>
	);
}

export default function NewHouse() {
	const classes = useStyles();

	const [kindHouse, setKindHouse] = React.useState("Departamento");
	const handleChangeKindHouse = (e) => {
		setKindHouse(e.target.value);
	};

	const [kindClient, setKindClient] = React.useState("Corporativo");
	const handleChangeKindClient = (e) => {
		setKindClient(e.target.value);
	};

	const [kindContract, setKindContract] = React.useState("Venta");
	const handleChangeKindContract = (e) => {
		setKindContract(e.target.value);
	};

	/* const [service, setService] = React.useState('Luz');
  const handleChangeService = e => {
    setService(e.target.value);
  }; */
	const [open, setOpen] = React.useState(false);

	const handleOpen = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Grow in>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Paper elevation={5} style={{ padding: "1rem", width: 900 }}>
					<Typography variant='h4'>Nueva propiedad</Typography>
					<Typography variant='h6' style={{ marginBottom: "2rem" }}>
						Complete los campos con los datos de la propiedad. No deben quedar
						campos sin completar.
					</Typography>
					<form action='' onSubmit={handleOpen}>
						<div id='kind'>
							<Typography variant='h6'>Tipo de propiedad</Typography>
							<RadioGroup
								name='kindHouse'
								value={kindHouse}
								onChange={handleChangeKindHouse}
								className={classes.formCtrl}>
								<FormControlLabel
									value='Departamento'
									control={<Radio />}
									label='Departamento'
								/>
								<FormControlLabel
									value='Casa'
									control={<Radio />}
									label='Casa'
								/>
								<FormControlLabel
									value='Chalet'
									control={<Radio />}
									label='Chalet'
								/>
								<FormControlLabel
									value='Local'
									control={<Radio />}
									label='Local'
								/>
								<FormControlLabel
									value='Casa con local'
									control={<Radio />}
									label='Casa con local'
								/>
								<FormControlLabel
									value='Cabaña'
									control={<Radio />}
									label='Cabaña'
								/>
								<FormControlLabel
									value='Cochera'
									control={<Radio />}
									label='Cochera'
								/>
							</RadioGroup>
						</div>
						<div id='location'>
							<Typography variant='h6'>Ubicación</Typography>
							<div
								style={{
									display: "flex",
									justifyContent: "space-around",
									marginBottom: "1rem",
								}}>
								<FormControl fullWidth style={{ marginRight: "2rem" }}>
									<TextField
										required
										autofocus
										variant='outlined'
										label='País'
									/>
								</FormControl>
								<FormControl
									fullWidth
									autofocus
									style={{ marginRight: "2rem" }}>
									<TextField required variant='outlined' label='Provincia' />
								</FormControl>
								<FormControl fullWidth autofocus>
									<TextField required variant='outlined' label='Localidad' />
								</FormControl>
							</div>

							<div
								style={{
									display: "flex",
									justifyContent: "space-around",
									marginBottom: "1rem",
								}}>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField required variant='outlined' label='Barrio' />
								</FormControl>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField required variant='outlined' label='Dirección' />
								</FormControl>
								<FormControl autofocus fullWidth>
									<TextField required variant='outlined' label='Calle' />
								</FormControl>
							</div>

							<div
								style={{
									display: "flex",
									justifyContent: "space-around",
									marginBottom: "1rem",
								}}>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField required variant='outlined' label='Piso' />
								</FormControl>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField required variant='outlined' label='Número' />
								</FormControl>
								<FormControl autofocus fullWidth>
									<TextField
										required
										variant='outlined'
										label='Código Postal'
									/>
								</FormControl>
							</div>
						</div>

						<div id='cantidad' style={{ marginBottom: "1rem" }}>
							<Typography variant='h6'>Cantidades</Typography>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<FormControl
									required
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField variant='outlined' label='Baño' type='number' />
								</FormControl>

								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField
										required
										variant='outlined'
										label='Dormitorios'
										type='number'
									/>
								</FormControl>

								<FormControl autofocus fullWidth>
									<TextField
										required
										variant='outlined'
										label='Suites'
										type='number'
									/>
								</FormControl>
							</div>
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginBottom: "1rem",
							}}>
							<FormControl autofocus fullWidth style={{ paddingRight: "2rem" }}>
								<TextField
									required
									variant='outlined'
									label='Antiguedad'
									type='number'
								/>
							</FormControl>

							<FormControl autofocus fullWidth style={{ paddingRight: "2rem" }}>
								<TextField
									required
									variant='outlined'
									label='Espacios'
									type='number'
								/>
							</FormControl>

							<FormControl autofocus fullWidth>
								<TextField
									required
									variant='outlined'
									label='Artefactos'
									type='number'
								/>
							</FormControl>
						</div>

						<div style={{ marginBottom: "1rem" }}>
							<Typography variant='h6'>Servicios</Typography>
							<CheckboxLabels />
						</div>

						<div
							style={{
								marginBottom: "1rem",
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
							}}>
							<div
								style={{ width: "50%", display: "flex", alignItems: "center" }}>
								<InputLabel style={{ marginRight: "2rem" }}>
									Tipo de Contrato
								</InputLabel>
								<RadioGroup
									name='kindContract'
									value={kindContract}
									onChange={handleChangeKindContract}
									className={classes.formCtrl}>
									<FormControlLabel
										value='venta'
										control={<Radio />}
										label='Venta'
									/>
									<FormControlLabel
										value='alquiler'
										control={<Radio />}
										label='Alquiler'
									/>
								</RadioGroup>
							</div>
							<div style={{ width: "50%" }}>
								<FormControl autofocus fullWidth>
									<TextField
										required
										variant='outlined'
										label='Precio'
										type='number'
									/>
								</FormControl>
							</div>
						</div>
						<div style={{ marginBottom: "1rem" }}>
							<div style={{ marginBottom: "1rem" }}>
								<FormControl autofocus fullWidth>
									<TextField
										required
										variant='outlined'
										label='Descripcion'
										type='text'
										helperText='Breve descripción de la propiedad'
									/>
								</FormControl>
							</div>
							<div style={{ marginBottom: "1rem" }}>
								<TextField
									label='Descripción detallada'
									variant='outlined'
									multiline
									rows={4}
									defaultValue='Escribe aquí...'
									fullWidth
								/>
							</div>
						</div>
						<div id='propietario' style={{ marginBottom: "1rem" }}>
							<Typography variant='h6'>Datos del propietario</Typography>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "1rem",
								}}>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField
										required
										variant='outlined'
										label='Número de Cliente'
										type='number'
									/>
								</FormControl>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField
										required
										variant='outlined'
										label='Nombre'
										type='text'
									/>
								</FormControl>
								<FormControl autofocus fullWidth>
									<TextField
										required
										variant='outlined'
										label='Apellido'
										type='text'
									/>
								</FormControl>
							</div>
							<div style={{ display: "flex", alignItems: "center" }}>
								<InputLabel style={{ marginRight: "2rem" }}>
									Tipo de cliente
								</InputLabel>
								<RadioGroup
									name='kindClient'
									value={kindClient}
									onChange={handleChangeKindClient}
									className={classes.formCtrl}>
									<FormControlLabel
										value='corporativo'
										control={<Radio />}
										label='Corporativo'
									/>
									<FormControlLabel
										value='particular'
										control={<Radio />}
										label='Particular'
									/>
								</RadioGroup>
							</div>
							<div
								style={{
									marginBottom: "1rem",
									display: "flex",
									alignItems: "center",
								}}>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField
										required
										variant='outlined'
										label='DNI'
										type='number'
									/>
								</FormControl>
								<FormControl
									autofocus
									fullWidth
									style={{ marginRight: "2rem" }}>
									<TextField
										required
										variant='outlined'
										label='Teléfono'
										type='number'
									/>
								</FormControl>
								<FormControl autofocus fullWidth>
									<TextField
										required
										variant='outlined'
										label='Email'
										type='text'
									/>
								</FormControl>
							</div>
						</div>
						<div style={{ marginBottom: "1rem" }}>
							<FormControl autofocus fullWidth>
								<TextField
									required
									variant='outlined'
									label='Dirección'
									type='text'
								/>
							</FormControl>
						</div>
						<Button type='submit' variant='contained' color='primary'>
							Guardar Cambios
						</Button>
					</form>
					<Modal
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}>
						<Fade in={open}>
							<div className={classes.paper}>
								<h2 id='transition-modal-title'>
									Datos cargados correctamente
								</h2>
							</div>
						</Fade>
					</Modal>
				</Paper>
			</div>
		</Grow>
	);
}
