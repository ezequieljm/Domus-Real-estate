import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Accordion, AccordionSummary, AccordionActions, AccordionDetails } from "@material-ui/core";
import { Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { ModalDelete } from "../ModalDelete";

import { RowAccordion } from "./RowAccordion";
import { EditedActivity } from "./EditedActivity";
import { ComponentEditAppointment } from "./ComponentEditAppoinment";
import { useStyles } from "./styles.detailAccordion";

/**
 * Main Component
 */
const DetailedAccordion = ({ arrayAppoinment }) =>
{
    const classes = useStyles();

    const [openEdit, setOpenEdit] = useState(0);

    const [appoinmentEdited, setAppEd] = useState();

    const [dataArrayAppoinment, setArrayApp] = useState([]);

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

    const requestPut = (id, arrayAppoinment) =>
    {
        if (openEdit === 2)
        {
            const getAppoinmentById = (arr, id) => arr.reduce((acc, curr) => (curr.id === id ? { ...curr } : acc), {});
            const appoinment = getAppoinmentById(arrayAppoinment, id);

            appoinment.agent = appoinmentEdited.agent
            appoinment.date = appoinmentEdited.date
            appoinment.hour = appoinmentEdited.hour
            appoinment.propertie = appoinmentEdited.propertie

            fetch(`http://localhost:4000/appoinments/${appoinment.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appoinment)
            })
                .catch(console.log)
        }
    }

    useEffect(() => requestPut(Number(dataArrayAppoinment[6]), arrayAppoinment), 
        [openEdit, appoinmentEdited,]
    );

    return (
        <>
            {arrayAppoinment.map(appoinment => (
                <Accordion
                    id={`${appoinment.id}`}
                    key={appoinment.id}
                    className={classes.root}
                    onChange={e => setOpenEdit(0)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "grey" }} />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{appoinment.title}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {appoinment.shortDescription}
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
                                            key={appoinment.title}
                                            row={appoinment}
                                            ident={`accordion-${appoinment.id}`}
                                        />
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {openEdit === 1 && (
                                <ComponentEditAppointment
                                    setOptionApp={setOpenEdit}
                                    setAppoinmentEdited={setAppEd}
                                />
                            )}
                            {openEdit === 2 && <EditedActivity />}
                        </div>
                    </AccordionDetails>
                    <AccordionActions style={{ background: "white" }}>
                        {appoinment.state === "Cancelada" && (
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
                            className={`accordion-${appoinment.id}`}
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