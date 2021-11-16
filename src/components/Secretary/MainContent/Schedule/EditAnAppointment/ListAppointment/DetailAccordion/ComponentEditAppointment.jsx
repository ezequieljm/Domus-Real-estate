import React, { useState } from "react";

import { Grow, TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";

const ComponentEditAppointment = ({ setOptionApp, setAppointmentEdited, appointment }) =>
{
    const dataAppointmentEdit = appointment;
    const [newAppointmentData, setNewAppointmentData] = useState(dataAppointmentEdit);
    const [currentDate, setCurrentDate] = useState(appointment.dateAppointment);

    const handleSelectedDate = date =>
    {
        const [dateOf, hourOf] = date.toLocaleString().split(",");
        setNewAppointmentData({ ...newAppointmentData, dateAppointment: dateOf, hour: hourOf });
        setCurrentDate(date.toLocaleDateString());
    };

    const handleButtonConfirm = () =>
    {
        setOptionApp(2);
        setAppointmentEdited(newAppointmentData);
    };

    return (
        <Grow in>
            <div>
                <div style={{ paddingLeft: "2.5rem", paddingRight: "2.5", paddingTop: "2.5rem" }}>
                    <TextField
                        helperText="Titulo"
                        defaultValue={appointment.title}
                        fullWidth
                        required
                        inputMode="text"
                        onChange={e =>
                            setNewAppointmentData({ ...newAppointmentData, title: e.currentTarget.value })
                        }
                    > </TextField>
                    <TextField
                        helperText="Descripción"
                        defaultValue={appointment.shortDescription}
                        fullWidth
                        required
                        inputMode="text"
                        onChange={e =>
                            setNewAppointmentData({ ...newAppointmentData, shortDescription: e.currentTarget.value })
                        }
                    > </TextField>
                </div>
                <div style={{ padding: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <TextField
                        helperText="Nombre completo"
                        defaultValue={appointment.client.fullName}
                        onChange={e =>
                            setNewAppointmentData({ ...newAppointmentData, client: { ...newAppointmentData.client, fullName: e.currentTarget.value } })
                        }
                    > </TextField>
                    <TextField
                        helperText="Teléfono"
                        defaultValue={appointment.client.cellphone}
                        onChange={e =>
                            setNewAppointmentData({ ...newAppointmentData, client: { ...newAppointmentData.client, cellphone: e.currentTarget.value } })
                        }
                    > </TextField>
                    <TextField
                        helperText="Email"
                        defaultValue={appointment.client.email}
                        onChange={e =>
                            setNewAppointmentData({ ...newAppointmentData, client: { ...newAppointmentData.client, email: e.currentTarget.value } })
                        }
                    > </TextField>
                </div>
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
            </div>
        </Grow >
    );
};

export default ComponentEditAppointment;