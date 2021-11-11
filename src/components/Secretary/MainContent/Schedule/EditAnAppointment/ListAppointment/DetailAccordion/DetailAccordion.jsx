import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Accordion, AccordionSummary, AccordionActions, AccordionDetails } from "@material-ui/core";
import { Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { ModalDelete } from "../ModalDelete";

import { RowAccordion } from "./RowAccordion";
import { EditedActivity } from "./EditedActivity";
import { ComponentEditAppointment } from "./ComponentEditAppointment";
import { useStyles } from "./styles.detailAccordion";

const DetailedAccordion = ({ arrayAppointment }) =>
{
    const classes = useStyles();

    const [openEdit, setOpenEdit] = useState(0);

    const [appointmentEdited, setAppEd] = useState();

    const [dataArrayAppointment, setArrayApp] = useState([]);

    const getTableRow = (str) => 
    {
        const id = str.substr(49, 11);
        const childNodes = document.getElementById(id).childNodes;

        let arrayOfData = []

        for (let children of childNodes)
        {
            arrayOfData.push(children.innerHTML);
        }

        arrayOfData.push(id.split('-')[1]);
        setArrayApp(arrayOfData);
    }

    const requestPut = (id, arrayAppointment) =>
    {
        if (openEdit === 2)
        {
            const getAppointmentById = (arr, id) => arr.reduce((acc, curr) => (curr.id === id ? { ...curr } : acc), {});
            const appointment = getAppointmentById(arrayAppointment, id);

            appointment.agent = appointmentEdited.agent
            appointment.date = appointmentEdited.date
            appointment.hour = appointmentEdited.hour
            appointment.propertie = appointmentEdited.propertie

            fetch(`http://localhost:4000/appointments/${appointment.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointment)
            })
                .catch(console.log)
        }
    }

    useEffect(() => requestPut(Number(dataArrayAppointment[6]), arrayAppointment),
        [openEdit, appointmentEdited,]
    );

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
                                            <TableCell align="right">Estado</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <RowAccordion
                                            key={appointment.title}
                                            row={appointment}
                                            ident={`accordion-${appointment.id}`}
                                        />
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {openEdit === 1 && (
                                <ComponentEditAppointment
                                    setOptionApp={setOpenEdit}
                                    setAppointmentEdited={setAppEd}
                                />
                            )}
                            {openEdit === 2 && <EditedActivity />}
                        </div>
                    </AccordionDetails>
                    <AccordionActions style={{ background: "white" }}>
                        {appointment.state === "Cancelada" && (
                            <Button style={{ color: "green" }} size="small">
                                Restablecer
                            </Button>
                        )}
                        <Button
                            size="small"
                            color="primary"
                            onClick={e =>
                            {
                                setOpenEdit(1);
                                getTableRow(e.currentTarget.className);
                            }}
                            className={`accordion-${appointment.id}`}
                        >
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