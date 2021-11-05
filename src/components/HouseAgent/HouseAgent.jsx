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
import {
	ArrowForwardIos,
	NotificationsNone,
	Today,
	BusinessCenter,
} from "@material-ui/icons";
import { useStyles } from "./styles";
import {
	FormatListBulleted,
	Add,
	Home,
	Schedule,
	Settings,
	Refresh,
	Report,
	MenuBook,
} from "@material-ui/icons";
import Appointment from "./MainContent/Appointment/Appointment";
import RealEstate from "./MainContent/RealEstate/RealEstate";
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

function HerramientasPropiedades({ hanList, inx }) {
	const tools = [
		{
			text: "Catálogo",
			icon: <Home />,
		},
		{
			text: "Lista de Propiedades",
			icon: <FormatListBulleted />,
		},
		{
			text: "Nueva Propiedad",
			icon: <Add />,
		},
	];
	return (
		<List>
			{tools.map((tool, index) => (
				<ListItem
					button
					key={tool.text}
					selected={inx === index}
					onClick={(e) => hanList(e, index)}>
					<ListItemIcon>{tool.icon}</ListItemIcon>
					<ListItemText primary={tool.text} />
				</ListItem>
			))}
		</List>
	);
}

function HerramientasAgenda({ hanList, inx }) {
	return (
		<List>
			<ListItem
				button
				key={"Agenda"}
				selected={inx === 0}
				onClick={(e) => hanList(e, 0)}>
				<ListItemIcon>
					<Schedule />
				</ListItemIcon>
				<ListItemText primary={"Agenda"} />
			</ListItem>
		</List>
	);
}

const HouseAgent = () => {
	const history = useHistory();
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const handleNavbarTab = (event, newValue) => setValue(newValue);
	const handleListItemClick = (event, index) => setSelectedIndex(index);
	const getCurrentDate = () => new Date().toDateString();

	React.useEffect(() => {
		setSelectedIndex(0);
	}, [value])

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
						<Tab label='Agenda' />
						<Tab label='Propiedades' />
					</Tabs>
					<Typography style={{ paddingRight: "2rem" }}>
						{getCurrentDate()}
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
							Agente Inmobiliario
						</Typography>
					</div>
					<div className={classes.appBarMainIconsUs}>
						<Today />
						<NotificationsNone />
						<Avatar>N</Avatar>
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
					{value === 1 && (
						<HerramientasPropiedades
							hanList={handleListItemClick}
							inx={selectedIndex}
						/>
					)}
					{value === 0 && (
						<HerramientasAgenda
							hanList={handleListItemClick}
							inx={selectedIndex}
						/>
					)}
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
				{value === 0 && <Appointment selectedIndex={selectedIndex} />}
				{value === 1 && <RealEstate selectedIndex={selectedIndex} />}
			</main>
		</div>
	);
}

export default HouseAgent;