/**
 * Reac Libs
 */
import React from "react"; 
/**
 * MaterialUI components
 */
import { Typography, Grow } from "@material-ui/core";

/**
 * Datas
 */
import dbClients from "../dbClients.json";
import MediaCard from "./MediaCard";

const cardText = dbClients.cardText;

/**
 * Main Component: ButtonDeploy
 */
const ButtonDeploy = ({ handleDeploy }) =>
    <Grow in>
        <div>
            <Typography variant='h4'>Nuevo cliente</Typography>
            <div
                elevation={5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <MediaCard textContent={cardText[0]} deploy={handleDeploy} icon={1} />
                <MediaCard textContent={cardText[1]} deploy={handleDeploy} icon={2} />
            </div>
        </div>
    </Grow>

export default ButtonDeploy;
