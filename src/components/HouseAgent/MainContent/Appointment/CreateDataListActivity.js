function createData(
	idAct,
	kindActv,
	date,
	hour,
	id,
	firstname,
	surname,
	location,
	phone,
	stateActiviti
) {
	return {
		idAct,
		kindActv,
		date,
		hour,
		history: [{ id, firstname, surname, location, phone, stateActiviti }],
	};
}

export const rows = [
	createData(
		"AF455",
		"Visita",
		new Date().toLocaleDateString(),
		new Date().toLocaleTimeString(),
		"34523",
		"Tifa",
		"Lockhart",
		"Las Venturas",
		"+54-239868728",
		"En Proceso"
	),
	createData(
		"AD653",
		"Ir a San Fierro",
		new Date().toLocaleDateString(),
		new Date().toLocaleTimeString(),
		"34523",
		"Tifa",
		"Lockhart",
		"Las Venturas",
		"+54-239868728",
		"Finalizada"
	),
	createData(
		"AF207",
		"Misión de carga, seguir el tren",
		new Date().toLocaleDateString(),
		new Date().toLocaleTimeString(),
		"34523",
		"Big Smoke",
		"Smoke",
		"United Station",
		"+54-239868728",
		"Cancelada"
	),
];
