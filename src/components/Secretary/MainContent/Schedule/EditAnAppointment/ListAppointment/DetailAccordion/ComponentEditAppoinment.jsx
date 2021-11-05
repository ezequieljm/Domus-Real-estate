import React from "react";

import { Grow, TextField, Button } from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";

export const ComponentEditAppointment = ({ setOptionApp }) => {
    const [selectedDate, handleDateChange] = React.useState(
        new Date().toLocaleString()
    );
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
                        value={selectedDate}
                        onChange={handleDateChange}
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
                >
                    {["Ned Bigby", "Gordon Freeman", "Feynman"].map((agent) => (
                        <option key={agent} value={agent}>
                            {agent}
                        </option>
                    ))}
                </TextField>
                <TextField
                    label="Propiedad"
                    helperText="Ingrese el código de la propiedad"
                    defaultValue="6853"
                ></TextField>
                <Button
                    size="small"
                    variant="contained"
                    onClick={() => setOptionApp(2)}
                >
                    Confirmar
                </Button>
            </div>
        </Grow>
    );
};
