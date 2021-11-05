import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBarMain: {
		zIndex: theme.zIndex.drawer + 1,
	},
	appBarNav: {
		background: "white",
		zIndex: theme.zIndex.drawer + 1,
		color: "black",
	},
	toolBar: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
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
	borderWhite: {
		border: "1px solid white",
	},
	borderBlack: {
		border: "1px solid black",
	},
	appBarMainDivs: {
		width: "400px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	appBarMainIconsUs: {
		width: "250px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));
