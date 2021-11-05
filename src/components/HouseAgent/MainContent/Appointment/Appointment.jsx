import React from "react";
import ReviewConsultUpdate from "./ReviewConsultUpdate";

export default function Appointment({ selectedIndex }) {
	return (
		<>
			{selectedIndex === 0 ? (
				<ReviewConsultUpdate />
			) : (
				<h1>Herramientas de página</h1>
			)}
		</>
	);
}
