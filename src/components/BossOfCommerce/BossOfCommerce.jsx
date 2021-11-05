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
	FormatListBulleted,
	Home,
	Schedule,
	Settings,
	Refresh,
	Report,
	MenuBook,
	PeopleAlt,
	HomeWork,
	AttachMoney,
	Domain,
} from "@material-ui/icons";
import {
	ArrowForwardIos,
	NotificationsNone,
	Today,
	BusinessCenter,
} from "@material-ui/icons";
import { useStyles } from "./stylesCommerce";
import MainContent from "./MainContent/MainContent";
import {useHistory} from "react-router-dom";

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

function HerramientasClientes({ hanList, inx }) {
	const tools = [
		{
			text: "Clientes",
			icon: <PeopleAlt />,
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

function HerramientasReportes({ hanList, inx }) {
	const tools = [
		{
			text: "Ventas",
			icon: <AttachMoney />
		},
		{
			text: "Alquileres",
			icon: <Domain />
		},
		{
			text: "Clientes",
			icon: <PeopleAlt />
		},
		{
			text: "Propiedades",
			icon: <HomeWork />
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
	const tools = [
		{
			text: "Agenda",
			icon: <Schedule />,
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

const BossOfCommerce = () => {
	const history = useHistory();
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const handleNavbarTab = (event, newValue) => setValue(newValue);
	const handleListItemClick = (event, index) => setSelectedIndex(index);

	React.useEffect(() => {
		setSelectedIndex(0);
	}, [value]);

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
						<Tab label='Reportes' />
						<Tab label='Clientes' />
						<Tab label='Propiedades' />
					</Tabs>
					<Typography style={{ paddingRight: "2rem" }}>
						Viernes 14 de Mayo 2021
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
							Comercialización
						</Typography>
					</div>
					<div className={classes.appBarMainIconsUs}>
						<Today />
						<NotificationsNone />
						<Avatar>J</Avatar>
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
				{value === 3 && (
						<HerramientasPropiedades
							hanList={handleListItemClick}
							inx={selectedIndex}
						/>
					)}
				{value === 2 && (
						<HerramientasClientes
							hanList={handleListItemClick}
							inx={selectedIndex}
						/>
					)}
				{value === 1 && (
						<HerramientasReportes
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
								selected={selectedIndex === index + 4}
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
				<MainContent val={value} inxTool={selectedIndex} />
			</main>
		</div>
	);
}

export default BossOfCommerce;