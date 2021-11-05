import React from "react";
import CatalogoDos from "./CatalogoDos";
import ListOfHouses from "./ListOfHouses/ListOfHouses";
import NewHouse from "./NewHouse/NewHouse";

export default function RealEstate({ selectedIndex }) {
	return (
		<>
			{selectedIndex === 0 && <CatalogoDos />}
			{selectedIndex === 1 && <ListOfHouses />}
			{selectedIndex === 2 && <NewHouse />}
			{selectedIndex > 2 && <h1>Herramientas de la página</h1>}
		</>
	);
}
