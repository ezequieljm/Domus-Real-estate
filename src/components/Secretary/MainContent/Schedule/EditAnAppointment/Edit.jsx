import React, { useState, useEffect } from "react";
import { Typography, Grow, Paper, CircularProgress } from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { materialTheme, VerticalCalendar } from "../DatePicker/DatePicker";
import { ThemeProvider } from "@material-ui/styles";

import DetailedAccordion from "./ListAppointment/DetailAccordion/DetailAccordion";
import { NoAppoinments } from "./ListAppointment/NoAppoinment";

/**
 * Main Component
 */
const EditAnAppointment = () =>
{
    const [getAppoinments, setGetAppoinments] = useState(0);

    const [dateSelect, setDateSelect] = useState(new Date().toLocaleDateString());

    const [arrayAppoinment, setAppoinment] = useState([]);

    const processRequest = (appoinments, date) =>
    {
        const appoinmentsByDate = appoinments.filter(appoinment => appoinment.date === date);
        setGetAppoinments(0);
        setTimeout(() =>
        {
            if (appoinmentsByDate.length === 0)
            {
                setGetAppoinments(2);
            } else
            {
                setAppoinment(appoinmentsByDate);
                setGetAppoinments(1);
            }
        }, 2000);
    };

    useEffect(() =>
    {
        fetch("http://localhost:4000/appoinments", { method: "GET" })
            .then(data => data.json())
            .then(appoinment => processRequest(appoinment, dateSelect))
            .catch(error =>
            {
                setGetAppoinments(0);
                setTimeout(() =>
                {
                    setGetAppoinments(2);
                }, 2000);
            });
    }, [dateSelect]);

    return (
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
                        <Typography variant="h4" color="primary" style={{ marginBottom: "1rem" }}>
                            Calendario
                        </Typography>
                        <div>
                            <ThemeProvider theme={materialTheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                    <VerticalCalendar setDate={setDateSelect} />
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
                        <Typography variant="h4" color="primary" style={{ marginBottom: "1rem" }}>
                            Citas del dia
                            {` ${new Date(dateSelect).toLocaleDateString()}`}
                        </Typography>
                        {getAppoinments === 1 && (
                            <div>
                                <DetailedAccordion arrayAppoinment={arrayAppoinment} />
                            </div>
                        )}
                        {getAppoinments === 0 && <CircularProgress size="5rem" />}
                        {getAppoinments === 2 && <NoAppoinments />}
                    </div>
                </div>
            </Paper>
        </Grow>
    );
};
export default EditAnAppointment;
