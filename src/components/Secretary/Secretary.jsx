/**
 * React Libs
 */
import React from "react";

/**
 * MaterialUI Components
 */
import MainContent from "./MainContent/MainContent";
import { CssBaseline, Avatar, Drawer, Typography } from "@material-ui/core";
import { AppBar, Tabs, Tab, Button, Toolbar } from "@material-ui/core";
import {
    BusinessCenter,
    Today,
    NotificationsNone,
    ArrowForwardIos,
} from "@material-ui/icons";

/**
 * React Router
 */
import { useHistory } from "react-router-dom";

/**
 * Application Components
 */
import SideBarTools from "./SideBarTools";
import { iconsAndOptions } from "./Icons/iconsAndOptions";
import ClientListTools from "./ClientListTool";

/**
 * Styles
 */
import { useMyStyles } from "./stylesSec";

/**
 * Main Component: Secretary (it's no pure because depend of useMyStyles, useHistory, useState, useEffect)
 * Secretary :: IO Html (with side-effects)
 */
const Secretary = () => {
    const classes = useMyStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleChange = (event, newValue) => setValue(newValue);
    const handleListItemClick = (event, index) => setSelectedIndex(index);

    React.useEffect(() => {
        setSelectedIndex(0);
    }, [value]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appbarNav}>
                <Toolbar />
                <div className={classes.toolBar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        style={{ paddingLeft: "2rem" }}
                    >
                        <Tab label="Clientes" />
                        <Tab label="Agenda" />
                        <Tab label="Solicitudes" />
                    </Tabs>
                    <Typography style={{ paddingRight: "2rem" }}>
                        Viernes 14 de Mayo 2021
                    </Typography>
                </div>
            </AppBar>
            <AppBar position="fixed" className={classes.appBarMain}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.divsAppbar}>
                        <BusinessCenter />
                        <Typography variant="h5" noWrap>
                            Oficina Virtual
                        </Typography>
                        <ArrowForwardIos />
                        <Typography variant="subtitle1" noWrap>
                            Secretaría
                        </Typography>
                    </div>
                    <div className={classes.divsAppbar}>
                        <Today />
                        <NotificationsNone />
                        <Avatar className={classes.green}>J</Avatar>
                        <Button
                            onClick={() => history.push("/")}
                            color="secondary"
                            variant="contained"
                        >
                            Salir
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
            >
                <Toolbar />
                <Toolbar />
                <div className={classes.drawerContainer}>
                    {value === 2 && (
                        <SideBarTools
                            handler={handleListItemClick}
                            currentIndex={selectedIndex}
                            iconsAndOptions={iconsAndOptions.requests}
                        />
                    )}
                    {value === 1 && (
                        <SideBarTools
                            handler={handleListItemClick}
                            currentIndex={selectedIndex}
                            iconsAndOptions={iconsAndOptions.schedule}
                        />
                    )}
                    {value === 0 && (
                        <ClientListTools
                            handler={handleListItemClick}
                            iconsAndOptions={iconsAndOptions.client}
                        />
                    )}
                    <SideBarTools
                        handler={handleListItemClick}
                        currentIndex={selectedIndex}
                        iconsAndOptions={iconsAndOptions.pageTool}
                    />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Toolbar />
                <MainContent val={value} inxTool={selectedIndex} />
            </main>
        </div>
    );
};

export default Secretary;
