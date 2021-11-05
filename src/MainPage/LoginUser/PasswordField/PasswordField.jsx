// React Libs
import React from "react";

// MaterialUI Components
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Typography,IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "../UseStyles/useStyeles";

function PasswordField({ setDatosUser, dataUserInput, attribError, setAttErr }){

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = function(prop,e) {
    setValues({ ...values, [prop]: e.target.value });
    setDatosUser({ ...dataUserInput, pass: e.currentTarget.value });
  };

  const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });

  const handleMouseDownPassword = event => event.preventDefault();

  return    <div className={classes.root}>
                <FormControl
                    fullWidth
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={e => handleChange("password",e)}
                        error={attribError.pass}
                        onFocus={() => setAttErr({ ...attribError, pass: false, hepPass: "" })}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                {attribError.pass && 
                    <Typography style={{ color: "red" }} variant="subtitle1">{attribError.hepPass}</Typography>
                }
            </div>
};

export default PasswordField;