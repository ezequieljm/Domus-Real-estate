// React Lib
import React from "react";

// MaterialUI Components
import { Typography, Button, TextField, Checkbox, FormControlLabel, Link, Grow } from "@material-ui/core";
import { useHistory } from "react-router";

// Application Component
import db from "../../samples/db.json";
import "./login.css";
import useStyles from "./UseStyles/useStyeles";
import PasswordField from "./PasswordField/PasswordField";

const att = { user: false, pass: false, hepUs: "", hepPass: "" };

function LoginUser() {
    const classes = useStyles();
    const history = useHistory();

    const [dataUserInput, setDatosUser] = React.useState({ user: "", pass: "" });
    const [attribError, setAttErr] = React.useState(att);

    const queryUserDB = user => user.usuario === dataUserInput.user && user.pass === dataUserInput.pass;

    const controlUserAndPassword = () => 
        db.usuarios.some(user => user.usuario === dataUserInput.user)
            ? setAttErr({ ...attribError, pass: true, hepPass: "Contraseña Incorrecta" })
            : setAttErr({ ...attribError, user: true, hepUs: "Usuario Incorrecto" });

    const check = e => {
        e.preventDefault();
        if (db.usuarios.some(queryUserDB)) {
            switch (dataUserInput.user) {
                case "jennifer":
                    history.push("/secretaria");
                    break;
                case "felipeRuiz":
                    history.push("/gerencia")
                    break;
                case "cookie":
                    history.push("/marketing")
                    break;
                case "micaela":
                    history.push("/administracion")
                    break;
                case "liliana":
                    history.push("/caja")
                    break;
                case "foxMulder":
                    history.push("/administracion-del-sitio")
                    break;
                case "jorgelina":
                    history.push("/comercio")
                    break;
                case "nedBigby":
                    history.push("/asesoria")
                    break;
                default:
                    break;
            }
        } else {
            controlUserAndPassword()
        }
    }

  return    <Grow in >
                <div className="login">
                    <Typography variant="h4">Oficina Virtual</Typography>
                    <form action="" className="form-control" onSubmit={check}>
                        <div className={classes.root}>
                            <TextField
                                label="Usuario"
                                variant="outlined"
                                required
                                autoFocus
                                onChange={(e) =>
                                    setDatosUser({ ...dataUserInput, user: e.target.value })
                                }
                                color="primary"
                                fullWidth
                                error={attribError.user}
                                onFocus={() =>
                                    setAttErr({ ...attribError, user: false, hepUs: "" })
                                }
                            />
                            {attribError.user && 
                                <Typography style={{ color: "red" }} variant="subtitle1"> {attribError.hepUs} </Typography> 
                            }
                        </div>
                        <PasswordField
                            setDatosUser={setDatosUser}
                            dataUserInput={dataUserInput}
                            attribError={attribError}
                            setAttErr={setAttErr}
                        />
                        <div className={classes.root}>
                            <FormControlLabel control={<Checkbox name="checkedB" color="primary" />}
                                label="Recordar sesión"
                            />
                        </div>
                        <div className={classes.root}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ width: "100%" }}
                            >
                                Iniciar Sesión
                            </Button>
                            <div
                                style={{
                                    marginTop: "1rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography variant="subtitle1">
                                    <Link href="#">Olvidaste la contraseña?</Link>
                                </Typography>
                                <Typography variant="subtitle1">
                                    <Link href="#">Contactar con soporte técnico</Link>
                                </Typography>
                            </div>
                        </div>
                    </form>
                    <Typography
                        variant="subtitle1"
                        style={{ marginTop: "2rem", color: "grey" }}
                    >
                        Copyright Group-11 2021
                    </Typography>
                </div>
            </Grow>
};

export default LoginUser;
