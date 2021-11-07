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
const DetailedAccordion = ({ arrayAppoinment }) => {
    /**
     * States
     */
    const classes = useStyles();
    const [openEdit, setOpenEdit] = useState(0);
    const [appoinmentEdited, setAppEd] = useState();
    const [dataArrayAppoinment, setArrayApp] = useState([]);

/*     function process(str) {
        const id = str.substr(49,11);
        const $tableRow = document.getElementById(id);
        const childNodes = $tableRow.childNodes;

        let arrayOfData = []

        for (item of $tableRow) {
            arrayOfData.push(item.innerHTML)
        }

        arrayOfData.push(id)
        return arrayOfData;

    } */

    /**
     * Pure Functions
     */
    const grepString = start => amount => str => str.substr(start, amount);

    const getItemById = id => document.getElementById(id);

    const getChieldsNodesFrom = item => item.childNodes;

    const convertToArray = childNodes => Array.from(childNodes);

    const mapper = fn => array => array.map(fn);

    const addIdForPOST = id => array => [...array, grepString(49)(11)(id).split("-")[1]];

    const compose =
        (...fns) =>
        args =>
            fns.reduceRight((arg, fn) => fn(arg), args);

    const getTableRow = id =>
        compose(
            setArrayApp,
            addIdForPOST(id),
            mapper(item => item.innerHTML),
            convertToArray,
            getChieldsNodesFrom,
            getItemById,
            grepString(49)(11)
        )(id);

    useEffect(() => {
        if (openEdit === 2) {
            const idTr = Number(dataArrayAppoinment[6]);
            const getAppoinmentById = (arr, id) => arr.reduce((acc, curr) => (curr.id === id ? { ...curr } : acc), {});
            let app = getAppoinmentById(arrayAppoinment,idTr);
            
            app.description.agente = appoinmentEdited.agent
            app.description.fecha = appoinmentEdited.date
            app.description.hora = appoinmentEdited.hour
            app.description.propiedad = appoinmentEdited.propertie
            
            fetch(`http://localhost:4000/appoinments/${app.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(app)
            })
            .then(response => response.json())
            .then(console.log)
            .catch(console.log)
        }
    }, [openEdit, appoinmentEdited]);

    /**
     * Return
     */
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
                                {appoinment.description.desBrev}
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
                        {appoinment.description.estado === "Cancelada" && (
                            <Button style={{ color: "green" }} size="small">
                                Restablecer
                            </Button>
                        )}
                        <Button
                            size="small"
                            color="primary"
                            onClick={e => {
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