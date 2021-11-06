import React, { useState, useEffect } from "react";
import { Typography, Grow, Paper } from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { materialTheme, VerticalCalendar } from "../DatePicker/DatePicker";
import { ThemeProvider } from "@material-ui/styles";

import DetailedAccordion from "./ListAppointment/DetailAccordion/DetailAccordion";
import { NoAppoinments } from "./ListAppointment/NoAppoinment";

const EditAnAppointment = () => {
    const [getAppoinments, setGetAppoinments] = useState(0);

    const [dateSelect, setDateSelect] = useState(
        new Date().toLocaleDateString()
    );

    const [arrayAppoinment, setAppoinment] = useState([]);

    const processRequest = (array, date) => {
        const appoinments = array.filter(
            appo => appo.description.fecha === date
        );
        if (appoinments.length === 0) {
            setGetAppoinments(0);
        } else {
            setAppoinment(appoinments);
            setGetAppoinments(1);
        }
    };

    useEffect(() => {
        fetch("http://localhost:4000/appoinments", { method: "GET" })
            .then(data => data.json())
            .then(array => {
                processRequest(array, dateSelect);
            })
            .catch(setGetAppoinments(0));
    }, [dateSelect]);

    return (
        <>
            <Grow in>
                <Paper elevation={5} style={{ padding: "1rem" }}>
                    <Typography variant="h2" style={{ marginBottom: "1rem" }}>
                        Agenda
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ minWidth: "20%", padding: "1rem" }}>
                            <Typography
                                variant="h4"
                                color="primary"
                                style={{ marginBottom: "1rem" }}
                            >
                                Calendario
                            </Typography>
                            <div>
                                <ThemeProvider theme={materialTheme}>
                                    <MuiPickersUtilsProvider
                                        utils={DateFnsUtils}
                                        locale={esLocale}
                                    >
                                        <VerticalCalendar
                                            setDate={setDateSelect}
                                        />
                                    </MuiPickersUtilsProvider>
                                </ThemeProvider>
                            </div>
                        </div>
                        <div
                            style={{
                                overflow: "auto",
                                padding: "1rem",
                                width: "1250px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                color="primary"
                                style={{ marginBottom: "1rem" }}
                            >
                                Citas del dia
                                {` ${new Date(
                                    dateSelect
                                ).toLocaleDateString()}`}
                            </Typography>
                            {getAppoinments === 1 && (
                                <div>
                                    <DetailedAccordion
                                        arrayAppoinment={arrayAppoinment}
                                    />
                                </div>
                            )}
                            {getAppoinments === 0 && <NoAppoinments />}
                        </div>
                    </div>
                </Paper>
            </Grow>
        </>
    );
};

export default EditAnAppointment;
