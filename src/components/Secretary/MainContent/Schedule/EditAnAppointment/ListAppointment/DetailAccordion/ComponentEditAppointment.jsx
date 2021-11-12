import React, { useState } from "react";

import { Grow, TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";

const ComponentEditAppointment = ({ setOptionApp, setAppointmentEdited, appointment }) =>
{
    const dataAppointmentEdit = {
        date: appointment.dateAppointment,
        hour: appointment.hour,
        agent: appointment.agent,
        propertie: appointment.propertie
    };
    const [newAppointmentData, setNewAppointmentData] = useState(dataAppointmentEdit);
    const [currentDate, setCurrentDate] = useState(appointment.dateAppointment);

    const handleSelectedDate = date =>
    {
        const [dateOf, hourOf] = date.toLocaleString().split(",");
        setNewAppointmentData({ ...newAppointmentData, date: dateOf, hour: hourOf });
        setCurrentDate(date.toLocaleDateString());
    };

    const handleButtonConfirm = () =>
    {
        setOptionApp(2);
        const appintmentEdited = {
            ...appointment,
            dateAppointment: newAppointmentData.date,
            hour: newAppointmentData.hour,
            propertie: newAppointmentData.propertie,
            agent: newAppointmentData.agent
        }
        setAppointmentEdited(appintmentEdited);
    };

    return (
        <Grow in>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "1rem",
                }}
            >
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                    <KeyboardDateTimePicker
                        defaultValue={currentDate}
                        onChange={handleSelectedDate}
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
                    onChange={e =>
                        setNewAppointmentData({ ...newAppointmentData, agent: e.currentTarget.selectedOptions[0].innerHTML })
                    }
                >
                    {["Ned Bigby", "Gordon Freeman", "Richard Feynman"].map(agent => (
                        <option key={agent} value={agent}>
                            {agent}
                        </option>
                    ))}
                </TextField>
                <TextField
                    label="Propiedad"
                    helperText="Ingrese el código de la propiedad"
                    defaultValue={appointment.propertie}
                    onChange={e => setNewAppointmentData({ ...newAppointmentData, propertie: e.currentTarget.value })}
                ></TextField>
                <Button size="small" variant="contained" onClick={handleButtonConfirm}>
                    Confirmar
                </Button>
            </div>
        </Grow>
    );
};

export default ComponentEditAppointment;