import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const RowAccordion = ({ row, ident }) =>
{
    const selectColor = color =>
        color === "En Proceso"
            ? "blue"
            : color === "Finalizada"
                ? "green"
                : "red";
    return (
        <TableRow id={ident}>
            <TableCell />
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right">{row.hour}</TableCell>
            <TableCell align="right">{row.agent}</TableCell>
            <TableCell align="right">{row.propertie}</TableCell>
            <TableCell
                align="right"
                style={{ color: selectColor(row.state) }}
            >
                {row.state}
            </TableCell>
        </TableRow>
    );
};
