import React, { useState } from "react";

import { Grow, TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";

export const ComponentEditAppointment = ({ setOptionApp, setAppoinmentEdited }) => {
    const dataAppoinmentEdit = { date: "", hour: "", agent: "Ned Bigby", propertie: "6853" };
    const [newData, setNewData] = useState(dataAppoinmentEdit);

    const handleSelectedDate = date => {
        const [dateOf, hourOf] = date.toLocaleString().split(",");
        setNewData({ ...newData, date: dateOf, hour: hourOf });
    };

    const handleButtonConfirm = () => {
        setOptionApp(2);
        setAppoinmentEdited(newData)
    }

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
                        value={new Date()}
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
                        setNewData({ ...newData, agent: e.currentTarget.selectedOptions[0].innerHTML })
                    }
                >
                    {["Ned Bigby", "Gordon Freeman", "Feynman"].map(agent => (
                        <option key={agent} value={agent}>
                            {agent}
                        </option>
                    ))}
                </TextField>
                <TextField
                    label="Propiedad"
                    helperText="Ingrese el código de la propiedad"
                    defaultValue="6853"
                    onChange={e => setNewData({ ...newData, propertie: e.currentTarget.value })}
                ></TextField>
                <Button size="small" variant="contained" onClick={handleButtonConfirm}>
                    Confirmar
                </Button>
            </div>
        </Grow>
    );
};
