//React lib
import React from "react";

//MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

export default function Row({ row }) {
	const [open,setOpen] = React.useState(false);

	return  <React.Fragment>
                <TableRow className={useRowStyles().root}>
                    <TableCell>
                        <IconButton
                            aria-label='expand row'
                            size='small'
                            onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component='th' scope='row'>
                        {row.fullname}
                    </TableCell>
                    <TableCell align='right'>{row.phone}</TableCell>
                    <TableCell align='right'>{row.email}</TableCell>
                    <TableCell align='right'>{row.age}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Box margin={1}>
                                <Typography variant='h6' gutterBottom component='div'>
                                    {row.detailedDescription.issue}
                                </Typography>
                                <Table size='small' aria-label='purchases'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Contenido</TableCell>
                                            <TableCell align='right'>Fecha</TableCell>
                                            <TableCell align='right'>Hora</TableCell>
                                            <TableCell align='right'>Revisado</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            <TableRow>
                                                <TableCell component='th' scope='row'>
                                                    {" "}
                                                    {row.detailedDescription.text}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {row.detailedDescription.dateOfAppointment}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {row.detailedDescription.hours}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {row.detailedDescription.inspected}
                                                </TableCell>
                                            </TableRow>
                                        }
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
}