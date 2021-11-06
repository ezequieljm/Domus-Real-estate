import React, { useEffect } from "react";

import { Grow, TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";

export const ComponentEditAppointment = ({ setOptionApp }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleSelectedDate = date => setSelectedDate(date);

    useEffect(() => {
        console.log(selectedDate.toLocaleString());
    }, [selectedDate]);

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
                    onChange={() => console.log("agent changed")}
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
                    onChange={() => console.log("estate changed")}
                ></TextField>
                <Button size="small" variant="contained" onClick={() => setOptionApp(2)}>
                    Confirmar
                </Button>
            </div>
        </Grow>
    );
};
