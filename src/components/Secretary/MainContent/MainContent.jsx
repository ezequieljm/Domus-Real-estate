/**
 * React Libs
 */
import React from "react";

/**
 * Application Components
 */
import Request from "./Requests/Requests";
import Schedule from "./Schedule/Schedule";
import Clients from "./Clients/Clients";

/**
 * Main Component: MainContent
 */
const MainContent = ({ val, inxTool }) => {
    return (
        <>
            {val === 2 ? (
                <Request />
            ) : val === 1 ? (
                <Schedule valueListTools={inxTool} />
            ) : (
                <Clients inxTool={inxTool} />
            )}
        </>
    );
};

export default MainContent;
