import React, { useState, useEffect } from "react";
import { Typography, Grow, Paper, CircularProgress } from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { materialTheme, VerticalCalendar } from "../DatePicker/DatePicker";
import { ThemeProvider } from "@material-ui/styles";

import DetailedAccordion from "./ListAppointment/DetailAccordion/DetailAccordion";
import { NoAppointments } from "./ListAppointment/NoAppointment";

import { AppointmentModel, ClientModel } from "./AppointmentModel"


const EditAnAppointment = () =>
{
    const [getAppointments, setGetAppointments] = useState(0);

    const [dateSelect, setDateSelect] = useState(new Date().toLocaleDateString());

    const [arrayAppointmentByDate, setAppointmentByDate] = useState([]);

    const [arrayAppointment, setAppointment] = useState([]);

    const processRequest = (appointments, date) =>
    {
        const appointmentsByDate = appointments.filter(appointment => appointment.dateAppointment === date);
        setGetAppointments(0);
        setTimeout(() =>
        {
            if (appointmentsByDate.length === 0)
            {
                setGetAppointments(2);
            } else
            {
                let appointmentsByDateTwo = []
                for (const app of appointmentsByDate) 
                {
                    let clientApp = new ClientModel(
                        app.client.idClient, 
                        app.client.fullname, 
                        app.client.cellphone, 
                        app.client.email
                    );
                    let appModel = new AppointmentModel(
                        app.id,
                        app.title,
                        app.shortDescription,
                        app.dateAppointment,
                        app.hour,
                        app.agent,
                        app.propertie,
                        app.stateAppointment,
                        clientApp
                    );
                    appointmentsByDateTwo.push(appModel);
                }
                setAppointmentByDate(appointmentsByDateTwo);
                setGetAppointments(1);
            }
        }, 2000);
    };

    /**
     * GET Request
     */
    useEffect(() =>
    {
        fetch("http://localhost:8080/secretary/schedule/appointments", { method: "GET" })
            .then(data => data.json())
            .then(appointment => 
            {
                setAppointment(appointment);
                processRequest(appointment, dateSelect)
            })
            .catch(error =>
            {
                setGetAppointments(0);
                setTimeout(() =>
                {
                    setGetAppointments(2);
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
                        <Typography style={{ marginTop: "2rem" }} variant="h4" color="primary">Fechas de citas</Typography>
                        <div style={{ height: "400px", overflow: 'auto', marginTop: "1rem" }}>
                            <ul>
                                {
                                    arrayAppointment.map(
                                        (app, index) =>
                                            <li key={index}>
                                                <Paper style={{ padding: "1rem", marginTop: ".5rem", background: "#3f51b5" }}>
                                                    <Typography style={{ color: "white" }} variant="h5">{app.dateAppointment}</Typography>
                                                </Paper>
                                            </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div style={{ overflow: "auto", padding: "1rem", width: "1250px" }} >
                        <Typography variant="h4" color="primary" style={{ marginBottom: "1rem" }}>
                            Citas del dia
                            {` ${new Date(dateSelect).toLocaleDateString()}`}
                        </Typography>
                        {getAppointments === 1 &&
                            <div>
                                <DetailedAccordion arrayAppointment={arrayAppointmentByDate} />
                            </div>}
                        {getAppointments === 0 &&
                            <div style={{ textAlign: "center" }}>
                                <CircularProgress size="5rem" />
                            </div>}
                        {getAppointments === 2 && <NoAppointments />}
                    </div>
                </div>
            </Paper>
        </Grow>
    );
};
export default EditAnAppointment;
