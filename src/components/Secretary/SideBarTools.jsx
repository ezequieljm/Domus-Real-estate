// React Libs
import React from "react";

// MaterialUI Components
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

/**
 * Main Component: SideBarTools (pure)
 */
const SideBarTools = ({ handler, currentIndex, iconsAndOptions }) => (
    <List>
        {iconsAndOptions.options.map((text, index) => (
            <ListItem
                button
                key={text}
                selected={
                    currentIndex ===
                    (iconsAndOptions.type === "Page tool" ? index + 4 : index)
                }
                onClick={(e) =>
                    handler(
                        e,
                        iconsAndOptions.type === "Page tool" ? index + 4 : index
                    )
                }
            >
                <ListItemIcon>
                    {
                        iconsAndOptions.icons[
                            iconsAndOptions.type === "Page tool"
                                ? index + 4
                                : index
                        ]
                    }
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
);

export default SideBarTools;
