import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Delete from "@material-ui/icons/Delete";
import { Grow } from "@material-ui/core";

const columns = [
	{ id: "name", label: "Nombre", minWidth: 170 },
	{ id: "description", label: "Descripción", minWidth: 170 },
	{ id: "delete", label: "Eliminar", minWidth: 170, align: "right" },
];

const createData = (name) => (description) => ({ name, description });

const rows = [
	createData("file1.txt")("domicilio del cliente..."),
	createData("file2.txt")("documentación..."),
	createData("file3.txt")("declaración jurada..."),
	createData("file4.txt")("fotos y dni..."),
	createData("file5.txt")("domicilio del cliente..."),
	createData("file6.txt")("domicilio del cliente..."),
];

const useStyles = makeStyles({
	root: {
		maxHeight: "250px",
	},
	container: {
		maxHeight: "250px",
	},
	iconStyles: {
		color: "red",
	},
});

export default function StickyHeadTable({ widthSize }) {
	const classes = useStyles();

	return (
		<Grow in={true}>
			<Paper className={classes.root} style={{ width: widthSize }}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										className={classes.headerList}>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									{columns.map((column) => (
										<TableCell key={column.id} align={column.align}>
											{column.id === "name" ? (
												row.name
											) : column.id === "description" ? (
												row.description
											) : (
												<Delete className={classes.iconStyles} />
											)}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Grow>
	);
}
