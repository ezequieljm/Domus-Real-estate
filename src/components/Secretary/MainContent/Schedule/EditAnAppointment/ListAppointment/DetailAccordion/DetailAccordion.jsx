import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionActions,
    AccordionDetails,
    Typography,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ModalDelete } from "../ModalDelete";

import { RowAccordion } from "./RowAccordion";
import { EditedActivity } from "./EditedActivity";
import { ComponentEditAppointment } from "./ComponentEditAppoinment";
import { useStyles } from "./styles.detailAccordion";

const compose =
    (...fns) =>
    args =>
        fns.reduceRight((arg, fn) => fn(arg), args);

/**
 * Main Component
 */
const DetailedAccordion = ({ arrayAppoinment }) => {
    /**
     * States
     */
    const classes = useStyles();
    const [openEdit, setOpenEdit] = React.useState(0);

    /**
     * Pure Functions
     */
    const grepString = start => amount => str => str.substr(start, amount);

    const getItemById = id => document.getElementById(id);

    const getChieldsNodesFrom = item => item.childNodes;

    const convertToArray = childNodes => Array.from(childNodes);

    const mapper = fn => array => array.map(fn);

    /**
     * getTableRow compose function
     */
    const getTableRow = id =>
        compose(
            console.log,
            mapper(item => item.innerHTML),
            convertToArray,
            getChieldsNodesFrom,
            getItemById,
            grepString(49)(11)
        )(id);

    /**
     * Return
     */
    return (
        <>
            {arrayAppoinment.map(appoinment => (
                <Accordion key={appoinment.id} className={classes.root} onChange={e => setOpenEdit(0)}>
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
                            {openEdit === 1 && <ComponentEditAppointment setOptionApp={setOpenEdit} />}
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