import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useMyStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
	appBarMain: {
		zIndex: theme.zIndex.drawer + 1,
	},
	appbarNav: {
		background: "white",
		zIndex: theme.zIndex.drawer + 1,
		color: "black",
	},
	toolBar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "50px",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	tabsStyles: {
		color: "black",
		backgroundColor: "white",
	},
	divTabDate: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "white",
		color: "black",
	},
	fontListText: {
		fontSize: ".9rem",
	},
	buttonExit: {
		background: "linear-gradient(to bottom, #cb2d3e, #ef473a)",
		border: 0,
		borderRadius: 3,
		color: "white",
		height: 38,
		padding: "0 20px",
	},
	divsAppbar: {
		width: "300px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
}));
