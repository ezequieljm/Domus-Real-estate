import React from "react";
import Catalogue from "./Catalogue/Catalogue";
import EditGallery from './EditGallery/EditGallery';
import InformationOfHouse from './EditGallery/InformationOfHouse';

export default function MainContent() {
  const [view, setView] = React.useState(0);
  const [dataClick, setDataClick] = React.useState(null);

	return (
		<>
      {view === 0 && <Catalogue setView={setView} setDataClick={setDataClick} />}
      {view === 1 && <InformationOfHouse setViewHouse={setView} dataClick={dataClick}/>}
      {view === 2 && <EditGallery setViewGallery={setView} />}
		</>
	);
}
