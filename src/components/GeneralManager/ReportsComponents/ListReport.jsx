import React from "react";
import { Typography, Button, Grow } from "@material-ui/core";
import SaleList from "./ListReports/SaleList";
import RentalReports from "./ListReports/RentalReports";
import ClientReports from "./ListReports/ClientReports";
import HouseReports from "./ListReports/HouseReports";

export default function ListReport({ setRepList, typeOfReport }) {
	return (
		<Grow in>
			<div>
				<div style={{margin: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
					<Typography variant='h5'>{typeOfReport.toUpperCase()}</Typography>
					<Button
						variant='contained'
						color='primary'
						>
						Imprimir
					</Button>
				</div>
				{typeOfReport === "ventas" && <SaleList />}
				{typeOfReport === "alquileres" && <RentalReports />}
				{typeOfReport === "clientes" && <ClientReports />}
				{typeOfReport === "propiedades" && <HouseReports />}
				<Button
					variant='contained'
					color='primary'
					style={{ marginTop: "1rem" }}
					onClick={() => setRepList(1)}>
					Reportes
				</Button>
			</div>
		</Grow>
	);
};
