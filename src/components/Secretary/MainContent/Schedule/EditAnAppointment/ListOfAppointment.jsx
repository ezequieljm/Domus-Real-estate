import React from "react";
import {
    TextField,
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";

function createDataSelf(name, date, hour, houseAgent, house, state) {
    return {
        name,
        date,
        hour,
        houseAgent,
        house,
        state,
        buttons: [
            "Cambiar Fecha y Hora",
            "Cambiar Agente Inmobiliario",
            "Cambiar Propiedad",
        ],
    };
}

function ComponentEditAppointment({ setOptionApp }) {
    const [selectedDate, handleDateChange] = React.useState(
        new Date().toLocaleString()
    );
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                <KeyboardDateTimePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    label="Fecha y Hora"
                    format="dd/MM/yyyy hh:mm a"
                    helperText="Selecciona una Fecha y Hora"
                />
            </MuiPickersUtilsProvider>
            <TextField
                select
                label="Agente"
                SelectProps={{ native: true }}
                helperText="Selecciona un agente inmobiliario"
            >
                {["Ned Bigby", "Gordon Freeman", "Feynman"].map((agent) => (
                    <option key={agent} value={agent}>
                        {agent}
                    </option>
                ))}
            </TextField>
            <TextField
                label="Propiedad"
                helperText="Ingrese el código de la propiedad"
                defaultValue="6853"
            ></TextField>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOptionApp(0)}
                >
                    Confirmar
                </Button>
            </div>
        </div>
    );
}

function OptionDeleteOrEdit({ state }) {
    const [optionApp, setOptionApp] = React.useState(0);
    const setColorFont = () =>
        state === "En Proceso"
            ? "#3f51b5"
            : state === "Finalizada"
            ? "#00e676"
            : "#e91e63";
    return (
        <>
            {optionApp === 0 ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOptionApp(1)}
                    >
                        Editar
                    </Button>
                    <Button variant="contained" color="primary">
                        Eliminar
                    </Button>
                    <Typography variant="h6" style={{ color: setColorFont() }}>
                        {state}
                    </Typography>
                </div>
            ) : optionApp === 1 ? (
                <ComponentEditAppointment setOptionApp={setOptionApp} />
            ) : (
                <h1>No edit</h1>
            )}
        </>
    );
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.hour}</TableCell>
                <TableCell align="right">{row.houseAgent}</TableCell>
                <TableCell align="right">{row.house}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <OptionDeleteOrEdit state={row.state} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function ListOfAppointment({ day }) {
    const rows = [
        createDataSelf(
            "Visitar No Russian...",
            day,
            new Date().toLocaleTimeString(),
            "Makarov",
            "6853",
            "En Proceso"
        ),
        createDataSelf(
            "Ir a Grove Street",
            day,
            new Date().toLocaleTimeString(),
            "Carl Johnson CJ",
            "8768",
            "Cancelada"
        ),
        createDataSelf(
            "Visitar USG Ishimura",
            day,
            new Date().toLocaleTimeString(),
            "Issac Clarke",
            "2376",
            "Finalizada"
        ),
    ];
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Descripción</TableCell>
                        <TableCell align="right">Fecha</TableCell>
                        <TableCell align="right">Hora</TableCell>
                        <TableCell align="right">Agente</TableCell>
                        <TableCell align="right">Propiedad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.houseAgent} row={row} day={day} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
