import React from "react";
import {
	Typography,
	makeStyles,
	TextField,
	Button,
	Grow,
} from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import ListDocs from "./ListDocs";

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "250px",
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "1rem",
	},
	dropBox: {
		width: "100%",
		height: "200px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		border: "1px dashed black",
	},
	icons: {
		fontSize: "5rem",
		color: "grey",
	},
	nameDescrip: {
		width: "35%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	contentUpload: {
		// border: '1px solid black'
	},
	contentDropBox: {
		width: "60%",
		height: "250px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
});

export default function UploadDocs() {
	const classes = useStyles();
	return (
		<div className={classes.contentUpload}>
			<Grow in={true}>
				<div className={classes.root}>
					<div className={classes.contentDropBox}>
						<div id='dropzone-files' className={classes.dropBox}>
							<Publish className={classes.icons} />
							<Typography variant='h5' style={{ color: "grey" }}>
								Arrastra el archivo aquí
							</Typography>
						</div>
						<Button variant='contained' color='primary'>
							Abrir
						</Button>
					</div>
					<div className={classes.nameDescrip}>
						<TextField
							label='Nombre'
							multiline
							variant='outlined'
							fullWidth
							placeholder='file.txt'
						/>
						<TextField
							label='Descriptción'
							multiline
							rows={4}
							variant='outlined'
							fullWidth
						/>
						<Button variant='contained' color='primary'>
							Agregar
						</Button>
					</div>
				</div>
			</Grow>
			<ListDocs widthSize={"100%"} />
		</div>
	);
}
