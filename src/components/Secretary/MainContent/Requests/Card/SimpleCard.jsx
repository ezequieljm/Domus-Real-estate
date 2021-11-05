import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStylesTow = makeStyles({
	root: {
		minWidth: 200,
		minHeight: 150,
		maxHeight: 170,
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
	},
});

const SimpleCard = ({ title, value, colorBackground, colorTxt }) =>
    <Card className={useStylesTow().root} style={{background: colorBackground}}>
        <CardContent>
            <Typography variant='h6' component='h2'>
                {title}
            </Typography>
            <Typography variant='h1' className={useStylesTow().colorFont} style={{color: colorTxt}}>
                {value}
            </Typography>
        </CardContent>
    </Card>

export default SimpleCard;