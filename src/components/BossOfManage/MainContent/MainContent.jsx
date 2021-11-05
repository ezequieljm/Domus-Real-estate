import React from "react";
import UpdateClient from "./Clients/UpdateClient/UpdateClient";
import Movements from "./Movements/Movements";

const MainContent = ({ val, inxTool }) => {
	return (
		<>
      { val === 1 
      ? ( <Movements selectedIndex={inxTool} /> )
      : ( <UpdateClient /> )
      }
		</>
	);
};

export default MainContent