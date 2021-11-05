import React from "react";
import FormFillPriv from "./FormFillPriv";
import ListDocs from "../UploadDocuments/ListDocs";
import { Typography, Grow, Paper } from "@material-ui/core";

export default function Check() {
	return (
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<FormFillPriv />
			<div style={{ width: "60%" }}>
				<ListDocs widthSize={"100%"} />
				<Grow in>
					<div>
						<Paper elevation={3} style={{ marginTop: "2rem", padding: "1rem" }}>
							<Typography variant='h5'>Código de cliente: FFA341DC</Typography>
						</Paper>
						<Paper elevation={3} style={{ marginTop: "1rem", padding: "1rem" }}>
							<Typography variant='h5'>
								Fecha de registro: Sábado 8 de Mayo 2021
							</Typography>
						</Paper>
						<Paper elevation={3} style={{ marginTop: "1rem", padding: "1rem" }}>
							<Typography variant='h5'>Hora: 15:44:45</Typography>
						</Paper>
					</div>
				</Grow>
			</div>
		</div>
	);
}
