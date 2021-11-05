import React from "react";
import MakeAnAppointment from "./MakeAnAppointment/MakeAnAppointment";
import EditAnAppointmentOrDelete from "./EditAnAppointment/Edit";

export default function Schedule({ valueListTools }) {
	return (
		<>
			{valueListTools === 0 ? (
				<MakeAnAppointment />
			) : valueListTools === 1 ? (
				<EditAnAppointmentOrDelete />
			) : (
				<h1>Herramientas de la página</h1>
			)}
		</>
	);
}
