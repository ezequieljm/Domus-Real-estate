import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxHeight: 500,
  },
});

function createRow(
  house,
  type,
  address,
  locale,
  ower,
  date,
  agent,
  occupant,
  contract,
  price
) {
  return {
    house,
    type,
    address,
    locale,
    ower,
    date,
    agent,
    occupant,
    contract,
    price,
  };
}
const rows = [
  createRow(
    "Johnny Bravo",
    "40659752",
    "Resistencia",
    "Cabaña",
    "Venta",
    "11/04/2021"
  ),
  createRow(
    "Timmy Turner",
    "40659752",
    "Resistencia",
    "Departamento",
    "Compra",
    "11/04/2021"
  ),
  createRow(
    "Gallo Claudio",
    "40659752",
    "Resistencia",
    "Local",
    "Venta",
    "11/04/2021"
  ),
  createRow(
    "Gumball Watterson",
    "40659752",
    "Resistencia",
    "Casa",
    "Compra",
    "11/04/2021"
  ),
];

const ClientReports = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} stickyHeader>
        <TableHead style={{ background: "#9fa8da" }}>
          <TableRow>
            <TableCell>Nombre y Apellido</TableCell>
            <TableCell align="right">DNI</TableCell>
            <TableCell align="right">Localidad</TableCell>
            <TableCell align="right">Inmueble</TableCell>
            <TableCell align="right">Contrato</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.house}>
              <TableCell>{row.house}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.locale}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
          <br />
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">4</TableCell>
          </TableRow>
          <br />
          <br />
          {rows.map((row) => (
            <TableRow key={row.house}>
              <TableCell>{row.house}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.locale}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
          <br />
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">4</TableCell>
          </TableRow>
          <br />
          <br />
          {rows.map((row) => (
            <TableRow key={row.house}>
              <TableCell>{row.house}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.locale}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
          <br />
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">4</TableCell>
          </TableRow>
          <br />
          <br />
          {rows.map((row) => (
            <TableRow key={row.house}>
              <TableCell>{row.house}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.locale}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
          <br />
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">4</TableCell>
          </TableRow>
          <br />
          <br />
          {rows.map((row) => (
            <TableRow key={row.house}>
              <TableCell>{row.house}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.locale}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
          <br />
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">4</TableCell>
          </TableRow>
          <br />
          <br />
          <TableRow>
            <TableCell colSpan={1}>Total General</TableCell>
            <TableCell align="right">16</TableCell>
          </TableRow>
          <br />
          <br />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientReports;
