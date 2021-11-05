import React from "react";

import { Grow, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export const EditedActivity = () => {
    return (
        <Grow in>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1rem",
                }}
            >
                <CheckCircleOutlineIcon style={{ color: "green" }} />
                <Typography variant="p">Actividad editada</Typography>
            </div>
        </Grow>
    );
};
