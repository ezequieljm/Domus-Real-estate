import React from "react";
import EditAnAppointment from "./Schedule/EditAnAppointment/Edit";
import UpdateClient from "./Clients/UpdateClient/UpdateClient";
import RealEstate from "./RealEstate/RealEstate";
import Reports from "./Reports/Reports";

const MainContent = ({ val, inxTool }) => {
	return (
		<>
      {val === 3 
      ? ( <RealEstate selectedIndex={inxTool} /> )
      : val === 2
      ? ( <UpdateClient /> )
      : val === 1
      ? ( <Reports selectedIndex={inxTool} /> )
      : ( <EditAnAppointment /> )
      }
		</>
	);
};

export default MainContent