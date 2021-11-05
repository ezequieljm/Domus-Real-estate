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
	Settings,
	Refresh,
	Report,
	MenuBook,
	PeopleAlt,
	AttachMoney,
	ListAlt,
} from "@material-ui/icons";
import {
	ArrowForwardIos,
	NotificationsNone,
	Today,
	BusinessCenter,
} from "@material-ui/icons";
import { useStyles } from "./stylesManage";
import MainContent from "./MainContent/MainContent";
import { useHistory } from "react-router-dom"

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

function HerramientasTransacciones({ hanList, inx }) {
	const tools = [
		{
			text: "Transacciones",
			icon: <AttachMoney />
		},
		{
			text: "Reportes",
			icon: <ListAlt />
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

const BossOfManage = () => {
	const classes = useStyles();
	const history = useHistory();
	const [value, setValue] = React.useState(0);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const handleNavbarTab = (event, newValue) => setValue(newValue);
	const handleListItemClick = (event, index) => setSelectedIndex(index);

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
						<Tab label='Clientes' />
						<Tab label='Transacciones' />
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
							Administración
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
					{value === 1 && (
						<HerramientasTransacciones
							hanList={handleListItemClick}
							inx={selectedIndex}
						/>
					)}
					{value === 0 && (
						<HerramientasClientes
							hanList={handleListItemClick}
							inx={selectedIndex}
						/>
					)}
					<List>
						{toolsPage.map((tool, index) => (
							<ListItem
								button
								key={tool.text}
								selected={selectedIndex === index + 2}
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

export default BossOfManage;