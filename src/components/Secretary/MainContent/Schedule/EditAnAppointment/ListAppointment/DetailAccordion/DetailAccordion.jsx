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
        console.log(tableData)
        setAppointmentEdited(tableData);
    }

    /**
     * PUT Request
     */
    useEffect(() =>
    {
        if (openEdit === 2)
        {
            fetch(`http://localhost:8080/secretary/schedule/appointments/modify/${appointmentEdited.id}`, {
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
                    id={`${appointment.getId()}`}
                    key={appointment.getId()}
                    className={classes.root}
                    onChange={e => setOpenEdit(0)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "grey" }} />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{appointment.getTitle()}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {appointment.getShortDescription()}
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
                                        <TableRow key={appointment.getId()} id={`accordion-${appointment.getId()}`}>
                                            <TableCell />
                                            <TableCell align="right">{appointment.getDateAppointment()}</TableCell>
                                            <TableCell align="right">{appointment.getHour()}</TableCell>
                                            <TableCell align="right">{appointment.getAgent()}</TableCell>
                                            <TableCell align="right">{appointment.getPropertie()}</TableCell>
                                            <TableCell align="right">{appointment.getClient().getFullname()}</TableCell>
                                            <TableCell align="right">{appointment.getClient().getCellphone()}</TableCell>
                                            <TableCell align="right">{appointment.getClient().getEmail()}</TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    color: appointment.stateAppointment === "En Proceso"
                                                        ? "blue"
                                                        : appointment.stateAppointment === "Finalizada" ? "green" : "red",
                                                }}
                                            >
                                                {appointment.getStateAppointment()}
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
                        {appointment.getStateAppointment() === "Cancelada" &&
                            <Button style={{ color: "green" }} size="small"> Restablecer </Button>}
                        <Button
                            size="small"
                            color="primary"
                            className={`accordion-${appointment.getId()}`}
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