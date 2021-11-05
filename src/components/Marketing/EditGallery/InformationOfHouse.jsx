import React from "react";
import { Typography, Button, Paper, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarouselDev from "./Carousel";

const useStyles = makeStyles((theme) => ({
	divContnInfo: {
		border: "1px solid black",
		padding: "1rem",
		margin: "1rem",
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
	},
	flexDivs: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

function InformationComp({ dataClick }) {
	const classes = useStyles();
	return (
		<>
			<Paper className={classes.divContnInfo} style={{ background: "#ef9a9a" }}>
				<Typography variant='subtitle1'>{`Estado: ${dataClick.available}`}</Typography>
				<Typography variant='subtitle1'>{`Código del inmueble ${dataClick.id}`}</Typography>
				<Typography variant='subtitle1'>{`Tipo: ${dataClick.kindHouse}`}</Typography>
				<Typography variant='subtitle1'>{`Ubicación: ${dataClick.location}`}</Typography>
				<Typography variant='subtitle1'>{`Baños: ${dataClick.amountOf.toilets}`}</Typography>
				<Typography variant='subtitle1'>{`Dormitorios: ${dataClick.amountOf.bedroom}`}</Typography>
				<Typography variant='subtitle1'>{`Suits: ${dataClick.amountOf.suites}`}</Typography>
				<Typography variant='subtitle1'>{`Antigüedad: ${dataClick.acient}`}</Typography>
				<Typography variant='subtitle1'>{`Espacios con los que cuenta: ${dataClick.spaceWithAccount}`}</Typography>
				<Typography variant='subtitle1'>{`Artefactos con los que cuenta: ${dataClick.artefactWithAccount}`}</Typography>
			</Paper>
			<Paper className={classes.divContnInfo} style={{ background: "#ce93d8" }}>
				<Typography variant='h5'>Servicios adheridos</Typography>
				<Typography variant='subtitle1'>{`${dataClick.adeheredServices[0]}`}</Typography>
				<Typography variant='subtitle1'>{`${dataClick.adeheredServices[1]}`}</Typography>
				<Typography variant='subtitle1'>{`${dataClick.adeheredServices[2]}`}</Typography>
			</Paper>
			<Paper className={classes.divContnInfo} style={{ background: "#64b5f6" }}>
				<Typography variant='h5'>Datos del propietario</Typography>
				<Typography variant='subtitle1'>{`Número de cliente: ${dataClick.owerDetails.numberId}`}</Typography>
				<Typography variant='subtitle1'>{`Tipo: ${dataClick.owerDetails.kind}`}</Typography>
				<Typography variant='subtitle1'>{`Nombre: ${dataClick.owerDetails.firstname}`}</Typography>
				<Typography variant='subtitle1'>{`Apellido: ${dataClick.owerDetails.surname}`}</Typography>
				<Typography variant='subtitle1'>{`DNI: ${dataClick.owerDetails.dni}`}</Typography>
				<Typography variant='subtitle1'>{`Teléfono: ${dataClick.owerDetails.phone}`}</Typography>
				<Typography variant='subtitle1'>{`Correo eletrónico: ${dataClick.owerDetails.email}`}</Typography>
				<Typography variant='subtitle1'>{`Dirección: ${dataClick.owerDetails.address}`}</Typography>
			</Paper>

			<Paper className={classes.divContnInfo} style={{ background: "#80cbc4" }}>
				<Typography variant='subtitle1'>{`Opciones de contrato: ${dataClick.contractOptions}`}</Typography>
			</Paper>
		</>
	);
}

export default function InformationOfHouse({ setViewHouse, dataClick }) {
	const classes = useStyles();

	return (
		<Grow in>
			<Paper elevaton={5} style={{ padding: "1rem" }}>
				<div className={classes.flexDivs}>
					<div style={{ width: "57%", maxHeight: "600px" }}>
						<h1>{dataClick.title}</h1>
						<p style={{ marginBottom: "1rem" }}>{dataClick.description}</p>
						<CarouselDev dataClick={dataClick} />
						<div>
							<Button
								onClick={() => setViewHouse(2)}
								variant='contained'
								color='primary'
								style={{ marginRight: "1rem" }}>
								Editar Galeria
							</Button>
							<Button
								onClick={() => setViewHouse(0)}
								variant='contained'
								color='secondary'>
								Volver
							</Button>
						</div>
					</div>
					<div style={{ width: "40%" }}>
						<InformationComp dataClick={dataClick} />
					</div>
				</div>
			</Paper>
		</Grow>
	);
}
