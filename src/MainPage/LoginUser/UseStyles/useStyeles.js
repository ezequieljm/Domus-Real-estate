import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "500px",
  },
  margin: {},
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {},
}));

export default useStyles;