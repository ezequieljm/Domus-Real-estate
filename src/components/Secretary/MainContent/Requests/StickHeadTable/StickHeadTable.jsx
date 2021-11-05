//React lib
import React from "react";

//Application Components
import Row from "./RowComp";

//MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//DB
import requestDataSample from "../request-data-sample.json"

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	container: {
		maxHeight: "350px",
	},
});

const columns = [
	{ 
        id: "noValue", 
        label: "", 
        minWidth: 170,  
		align: "left",
    },
	{ 
        id: "Nombre", 
        label: "Nombre", 
        minWidth: 170,
		align: "left",
    },
	{
		id: "teléfono",
		label: "Teléfono",
		minWidth: 170,
		align: "right",
		format: value => value.toLocaleString("en-US"),
	},
	{
		id: "email",
		label: "Email",
		minWidth: 170,
		align: "right",
		format: value => value.toLocaleString("en-US"),
	},
	{
		id: "edad",
		label: "Edad",
		minWidth: 170,
		align: "right",
		format: value => value.toFixed(2),
	},
];


const tableCellByMap = column => 
    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}> 
        {column.label}
    </TableCell>


function StickyHeadTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangeRowsPerPage = function(event) {
            setRowsPerPage(+event.target.value);
            setPage(0);
        };

    const handleChangePage = (event, newPage) => setPage(newPage);

	return  <Paper className={useStyles().root} elevation={3}>
                <TableContainer className={useStyles().container}>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>{columns.map(tableCellByMap)}</TableRow>
                        </TableHead>
                        <TableBody>
                            {requestDataSample
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(row => <Row key={row.fullname} row={row}/>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component='div'
                    count={requestDataSample.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
}

export default StickyHeadTable;