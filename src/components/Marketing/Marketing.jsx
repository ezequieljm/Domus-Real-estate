import React from "react";
import {
	Avatar,
	Drawer,
	AppBar,
	CssBaseline,
	Toolbar,
	List,
	Typography,
	ListItem,
	ListItemIcon,
	ListItemText,
	Button,
	Tab,
	Tabs,
} from "@material-ui/core";
import { Settings, Refresh, Report, MenuBook, Home } from "@material-ui/icons";
import {
	ArrowForwardIos,
	NotificationsNone,
	Today,
	BusinessCenter,
} from "@material-ui/icons";
import { useStyles } from "./stylesMarketing";
import MainContent from "./MainContent";
import { useHistory } from "react-router-dom";

const toolsPage = [
	{
		text: "Configuración",
		icon: <Settings />,
	},
	{
		text: "Recargar Pagina",
		icon: <Refresh />,
	},
	{
		text: "Reportar Problema",
		icon: <Report />,
	},
	{
		text: "Consultar Manual",
		icon: <MenuBook />,
	},
];

const toolsView = [
	{
		text: "Catálogo",
		icon: <Home />,
	},
];

const Marketing = () => {
	const history = useHistory();
	const [value, setValue] = React.useState(0);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const classes = useStyles();

	const handleNavbarTab = (event, newValue) => setValue(newValue);
	const handleListItemClick = (event, index) => setSelectedIndex(index);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBarNav}>
				<Toolbar />
				<div className={classes.toolBar}>
					<Tabs
						value={value}
						onChange={handleNavbarTab}
						indicatorColor='primary'
						style={{ paddingLeft: "2rem" }}>
						<Tab label='Propiedades' />
					</Tabs>
					<Typography style={{ paddingRight: "2rem" }}>
						{"Viernes 14 de Mayo 2021"}
					</Typography>
				</div>
			</AppBar>
			<AppBar position='fixed' className={classes.appBarMain}>
				<Toolbar className={classes.toolBar}>
					<div className={classes.appBarMainDivs}>
						<BusinessCenter />
						<Typography variant='h5' noWrap>
							Oficina Virtual
						</Typography>
						<ArrowForwardIos />
						<Typography variant='subtitle1' noWrap>
							Marketing
						</Typography>
					</div>
					<div className={classes.appBarMainIconsUs}>
						<Today />
						<NotificationsNone />
						<Avatar>C</Avatar>
						<Button variant='contained' color='secondary' onClick={() => history.push("/")}>
							Salir
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{ paper: classes.drawerPaper }}>
				<Toolbar />
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						{toolsView.map((tool, index) => (
							<ListItem
								button
								key={tool.text}
								selected={selectedIndex === index}
								onClick={(event) => handleListItemClick(event, index)}>
								<ListItemIcon>{tool.icon}</ListItemIcon>
								<ListItemText primary={tool.text} />
							</ListItem>
						))}
					</List>
					<List>
						{toolsPage.map((tool, index) => (
							<ListItem
								button
								key={tool.text}
								selected={selectedIndex === index + 3}
								onClick={(event) => handleListItemClick(event, index + 3)}>
								<ListItemIcon>{tool.icon}</ListItemIcon>
								<ListItemText primary={tool.text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Toolbar />
				<MainContent />
			</main>
		</div>
	);
}

export default Marketing;