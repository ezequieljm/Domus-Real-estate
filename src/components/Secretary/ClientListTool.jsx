// React Libs
import React from "react";

// MaterialUI Components
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
    List,
    ListItem,
    Collapse,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";

/**
 * Main Component: ClientListTools
 */
const ClientListTools = ({ handler, iconsAndOptions }) => {
    const [stateTool, setStateTool] = React.useState({ open: false, index: 0 });
    const arrTool = ["Actualizar Datos", "Nuevo Cliente"];
    const arrSubTool = ["Corporativo", "Particular"];

    const handleClick = (event, inx) => {
        handler(event, inx);
        inx === 1
            ? setStateTool({ ...stateTool, open: !stateTool.open, index: inx })
            : setStateTool({ ...stateTool, open: false, index: inx });
    };

    const handleSubTool = (event, inx) => {
        handler(event, inx);
        setStateTool({ ...stateTool, index: inx });
    };

    return (
        <List>
            {arrTool.map((text, index) => (
                <ListItem
                    button
                    key={text}
                    onClick={(e) => handleClick(e, index)}
                    selected={stateTool.index === index}
                >
                    <ListItemIcon>{iconsAndOptions.icons[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                    {index === 1 &&
                        (stateTool.open ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
            ))}
            <Collapse in={stateTool.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {arrSubTool.map((text, index) => (
                        <ListItem
                            button
                            key={text}
                            style={{ paddingLeft: 40 }}
                            onClick={(e) => handleSubTool(e, index + 2)}
                            selected={stateTool.index === index + 2}
                        >
                            <ListItemIcon>
                                {iconsAndOptions.icons[index + 2]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </List>
    );
};

export default ClientListTools;
