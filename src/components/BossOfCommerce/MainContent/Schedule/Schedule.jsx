import React from "react";
import EditAnAppointmentOrDelete from "./EditAnAppointment/Edit";

export default function Schedule({ valueListTools }) {
	return (
		<>
			{valueListTools === 0 ? (
				<EditAnAppointmentOrDelete />
			) : (
				<h1>Herramientas de la página</h1>
			)}
		</>
	);
}
