/**
 * React Libs
 */
import React from "react";

/**
 * Application Components
 */
import CorporateClient from "../CorporateClient/CorporateClient";
import PrivateClient from "../PrivateClient/PrivateClient";
import ButtonDeploy from "./ButtonDeploy";

/**
 * Main Component: NewClient
 */
const NewClient = () => {
    const [deploy, setDeploy] = React.useState(0);
	return (
		<>
			{
                deploy === 0 
                    ? <ButtonDeploy handleDeploy={setDeploy} /> 
                    : deploy === 1 
                        ? <CorporateClient />
                        : <PrivateClient />
            }
		</>
	);
}

export default NewClient;