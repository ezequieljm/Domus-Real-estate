import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const RowAccordion = ({ row }) => {
    const selectColor = (color) => {
        return color === "En Proceso"
            ? "blue"
            : color === "Finalizada"
            ? "green"
            : "red";
    };

    return (
        <TableRow>
            <TableCell />
            <TableCell align="right">{row.description.fecha}</TableCell>
            <TableCell align="right">{row.description.hora}</TableCell>
            <TableCell align="right">{row.description.agente}</TableCell>
            <TableCell align="right">{row.description.propiedad}</TableCell>
            <TableCell
                align="right"
                style={{ color: selectColor(row.description.estado) }}
            >
                {row.description.estado}
            </TableCell>
        </TableRow>
    );
};
