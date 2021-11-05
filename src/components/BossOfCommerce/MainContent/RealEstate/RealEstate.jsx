import React from "react";
import CatalogoDos from "./CatalogoDos";
import ListOfHouses from "./ListOfHouses/ListOfHouses";

export default function RealEstate({ selectedIndex }) {
	return (
		<>
			{selectedIndex === 0 && <CatalogoDos />}
			{selectedIndex === 1 && <ListOfHouses />}
			{selectedIndex > 1 && <h1>Herramientas de la página</h1>}
		</>
	);
}
