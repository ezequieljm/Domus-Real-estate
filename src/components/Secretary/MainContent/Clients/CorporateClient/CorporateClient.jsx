import React from "react";
import { makeStyles } from "@material-ui/core";
import { Card, Typography, Grow } from "@material-ui/core";
import StepperHorizontal from "./StepperHorizontal";

const useStyles = makeStyles({
	card: {
		width: "100%",
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		padding: "1rem",
	},
	divFormPrivateClient: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default function CorporateClient() {
	const classes = useStyles();
	return (
		<Grow in={true}>
			<div id='form-private-client' className={classes.divFormPrivateClient}>
				<Card className={classes.card}>
					<Typography variant='h4' style={{ marginBottom: "1rem" }}>
						Nuevo Cliente Corporativo
					</Typography>
					<StepperHorizontal />
				</Card>
			</div>
		</Grow>
	);
}
