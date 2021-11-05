/**
 * React Libs
 */
import React from "react";

/**
 * Application Component
 */
import CorporateClient from "./CorporateClient/CorporateClient";
import PrivateClient from "./PrivateClient/PrivateClient";
import UpdateClient from "./UpdateClient/UpdateClient";
import NewClient from "./NewClients/NewClient";

/**
 * Main Component: Client (pure)
 */
const Clients = ({ inxTool }) =>
    <>
        {inxTool === 0 ? (
            <UpdateClient />
        ) : inxTool === 1 ? (
            <NewClient />
        ) : inxTool === 2 ? (
            <CorporateClient />
        ) : inxTool === 3 ? (
            <PrivateClient />
        ) : (
            <h1>Herramientas de página</h1>
        )}
    </>

export default Clients;
