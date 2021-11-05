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
	AttachMoney,
	SyncAlt,
} from "@material-ui/icons";
import { useStyles } from "./stylesCashier";
import { Settings, Refresh, Report, MenuBook } from "@material-ui/icons";
import Payments from "./MainContent/Payments/Payments";
import Movements from "./MainContent/Movements/Movements";
import { useHistory } from "react-router";

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

function ToolsCash({ hanList, inx }) {
	const tools = [
		{
			text: "Alquiler",
			icon: <AttachMoney />,
		},
		{
			text: "Venta",
			icon: <i className='far fa-handshake' style={{ fontSize: "1.5rem" }}></i>,
		},
		{
			text: "Cerrar Caja",
			icon: (
				<i className='fas fa-cash-register' style={{ fontSize: "1.5rem" }}></i>
			),
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

function ToolsMovements({ hanList, inx }) {
	const tools = [
		{
			text: "Entradas y Salidas",
			icon: <SyncAlt />,
		},
		{
			text: "Movimientos de caja",
			icon: <i className='far fa-handshake' style={{ fontSize: "1.5rem" }}></i>,
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

const Cashier = () => {
	const classes = useStyles();
	const history = useHistory();
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
						<Tab label='Caja' />
						<Tab label='Movimientos' />
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
							Cajera
						</Typography>
					</div>
					<div className={classes.appBarMainIconsUs}>
						<Today />
						<NotificationsNone />
						<Avatar>L</Avatar>
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
					{value === 0 && (
						<ToolsCash hanList={handleListItemClick} inx={selectedIndex} />
					)}
					{value === 1 && (
						<ToolsMovements hanList={handleListItemClick} inx={selectedIndex} />
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
				{value === 0 && <Payments selectedIndex={selectedIndex} />}
				{value === 1 && <Movements selectedIndex={selectedIndex} />}
			</main>
		</div>
	);
}

export default Cashier;