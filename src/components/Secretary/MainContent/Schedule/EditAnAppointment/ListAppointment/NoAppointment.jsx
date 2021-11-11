import React from "react";
import { Typography } from "@material-ui/core";

export const NoAppointments = () =>
{
    return (
        <div>
            <Typography variant="h1" style={{ color: "grey", textAlign: "center" }}>
                No hay citas
            </Typography>
        </div>
    );
};
