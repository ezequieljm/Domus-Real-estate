import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Accordion, AccordionSummary, AccordionActions, AccordionDetails } from "@material-ui/core";
import { Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { ModalDelete } from "../ModalDelete";

import { EditedActivity } from "./EditedActivity";
import ComponentEditAppointment from "./ComponentEditAppointment";
import { useStyles } from "./styles.detailAccordion";

const DetailedAccordion = ({ arrayAppointment }) =>
{
    const classes = useStyles();

    const [openEdit, setOpenEdit] = useState(0);

    const [appointmentEdited, setAppointmentEdited] = useState({});

    const captureTableData = event =>
    {
        const id = Number(event.currentTarget.className.substr(49, 11).split('-')[1]);
        const tableData = arrayAppointment.reduce((acc, curr) => curr.id === id ? curr : acc, {});
        setAppointmentEdited(tableData);
    }

    /**
     * PUT Request
     */
    useEffect(() =>
    {
        if (openEdit === 2)
        {
            fetch(`http://localhost:8080/secretary/schedule/appointments/${appointmentEdited.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentEdited)
            })
                .catch(console.log)
        }
    }, [openEdit, appointmentEdited])

    const handleEventEditButton = event =>
    {
        setOpenEdit(1);
        captureTableData(event);
    }

    return (
        <>
            {arrayAppointment.map(appointment => (
                <Accordion
                    id={`${appointment.id}`}
                    key={appointment.id}
                    className={classes.root}
                    onChange={e => setOpenEdit(0)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "grey" }} />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{appointment.title}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {appointment.shortDescription}
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details} style={{ background: "white" }}>
                        <div style={{ width: "100%" }}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell />
                                            <TableCell align="right">Fecha</TableCell>
                                            <TableCell align="right">Hora</TableCell>
                                            <TableCell align="right">Agente</TableCell>
                                            <TableCell align="right">Propiedad</TableCell>
                                            <TableCell align="right">Cliente</TableCell>
                                            <TableCell align="right">Teléfono</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Estado</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key={appointment.id} id={`accordion-${appointment.id}`}>
                                            <TableCell />
                                            <TableCell align="right">{appointment.dateAppointment}</TableCell>
                                            <TableCell align="right">{appointment.hour}</TableCell>
                                            <TableCell align="right">{appointment.agent}</TableCell>
                                            <TableCell align="right">{appointment.propertie}</TableCell>
                                            <TableCell align="right">{appointment.client}</TableCell>
                                            <TableCell align="right">{appointment.cellphone}</TableCell>
                                            <TableCell align="right">{appointment.email}</TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    color: appointment.state === "En Proceso"
                                                        ? "blue"
                                                        : appointment.state === "Finalizada" ? "green" : "red",
                                                }}
                                            >
                                                {appointment.state}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {openEdit === 1 &&
                                <ComponentEditAppointment
                                    setOptionApp={setOpenEdit}
                                    setAppointmentEdited={setAppointmentEdited}
                                    appointment={appointment}
                                />}
                            {openEdit === 2 &&
                                <EditedActivity />}
                        </div>
                    </AccordionDetails>
                    <AccordionActions style={{ background: "white" }}>
                        {appointment.state === "Cancelada" &&
                            <Button style={{ color: "green" }} size="small"> Restablecer </Button>}
                        <Button
                            size="small"
                            color="primary"
                            className={`accordion-${appointment.id}`}
                            onClick={handleEventEditButton}>
                            Editar
                        </Button>
                        <ModalDelete />
                    </AccordionActions>
                </Accordion>
            ))}
        </>
    );
};

export default DetailedAccordion;