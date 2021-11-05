import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { tileData } from "./dataHouse";
import {
	Divider,
	Paper,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	Grow,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		marginBottom: "1rem",
		// background: '#3f51b5',
		// color: 'white'
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	gridContainer: {
		paddingLeft: "40px",
		paddingRight: "40px",
	},
}));

function RecipeReviewCard({ data }) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const setColor = (state) => (state === "Disponible" ? "green" : "red");

	return (
		<Card elevation={5} className={classes.root}>
			<CardHeader title={data.title} subheader='Foto: Septiembre 14, 2016' />
			<CardMedia
				className={classes.media}
				image={data.img}
				title={data.title}
			/>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{data.description}
				</Typography>
				<Typography variant='h6' style={{ color: setColor(data.available) }}>
					{data.available}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph>{`Código: ${data.id}`}</Typography>
					<Typography paragraph>{`Tipo: ${data.kindHouse}`}</Typography>
					<Typography paragraph>{`Ubicación: ${data.location}`}</Typography>
					<Typography paragraph>
						{`Baños: ${data.amountOf.toilets} - Dormitorios: ${data.amountOf.bedroom} - Suites: ${data.amountOf.suites}`}
					</Typography>
					<Typography paragraph>{`Antigüedad: ${data.acient}`}</Typography>
					<Typography
						paragraph>{`Espacios con cuenta: ${data.spaceWithAccount}`}</Typography>
					<Typography
						paragraph>{`Artefactos con Cuenta: ${data.artefactWithAccount}`}</Typography>
					<Typography
						paragraph>{`Servicios adheridos: ${data.adeheredServices}`}</Typography>
					<Typography
						paragraph>{`Artefactos con Cuenta: ${data.artefactWithAccount}`}</Typography>
					<Divider />
					<br />
					<Typography paragraph> Detalles del Propietario </Typography>
					<Typography paragraph>
						{" "}
						{`Número de cliente: ${data.owerDetails.numberId}`}{" "}
					</Typography>
					<Typography paragraph>
						{" "}
						{`Tipo de cliente: ${data.owerDetails.kind}`}{" "}
					</Typography>
					<Typography paragraph>
						{" "}
						{`Nombre: ${data.owerDetails.firstname}`}{" "}
					</Typography>
					<Typography paragraph>
						{" "}
						{`Apellido: ${data.owerDetails.surname}`}{" "}
					</Typography>
					<Typography paragraph> {`DNI: ${data.owerDetails.dni}`} </Typography>
					<Typography paragraph>
						{" "}
						{`Teléfono: ${data.owerDetails.phone}`}{" "}
					</Typography>
					<Typography paragraph>
						{" "}
						{`Correo electrónico: ${data.owerDetails.email}`}{" "}
					</Typography>
					<Typography paragraph>
						{" "}
						{`Direccion: ${data.owerDetails.address}`}{" "}
					</Typography>
					<Divider />
					<br />
					<Typography paragraph>
						{" "}
						{`Opciones de contrato: ${data.contractOptions}`}{" "}
					</Typography>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}>
						<ExpandMoreIcon />
					</IconButton>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default function App() {
	return (
		<Grow in>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<Typography variant='h4' style={{ marginBottom: "1rem" }}>
					Catálogo de Propiedades
				</Typography>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div style={{ marginRight: ".5rem" }}>
						<RecipeReviewCard data={tileData[0]} />
						<RecipeReviewCard data={tileData[1]} />
						<RecipeReviewCard data={tileData[2]} />
					</div>
					<div style={{ marginRight: ".5rem" }}>
						<RecipeReviewCard data={tileData[3]} />
						<RecipeReviewCard data={tileData[0]} />
						<RecipeReviewCard data={tileData[1]} />
					</div>
					<div style={{ marginRight: ".5rem" }}>
						<RecipeReviewCard data={tileData[2]} />
						<RecipeReviewCard data={tileData[3]} />
						<RecipeReviewCard data={tileData[0]} />
					</div>
				</div>
			</Paper>
		</Grow>
	);
}
