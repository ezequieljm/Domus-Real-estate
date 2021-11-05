import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {
	Box,
	Tabs,
	Tab,
	AppBar,
	Typography,
} from "@material-ui/core";
import ListRental from "./ListRental";
import ListBuy from "./ListBuy";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "100%",
		position: "relative",
		minHeight: 200,
	},
	fab: {
		position: "absolute",
		bottom: theme.spacing(-5),
		right: theme.spacing(2),
	},
	fabGreen: {
		color: theme.palette.common.white,
		backgroundColor: green[500],
		"&:hover": {
			backgroundColor: green[600],
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	paperTwo: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`action-tabpanel-${index}`}
			aria-labelledby={`action-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `action-tab-${index}`,
		"aria-controls": `action-tabpanel-${index}`,
	};
}

export default function InputOutput() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'>
					<Tab label='Entradas' {...a11yProps(0)} />
					<Tab label='Salidas' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<div>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<ListRental />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<ListBuy />
				</TabPanel>
			</div>
		</div>
	);
}
