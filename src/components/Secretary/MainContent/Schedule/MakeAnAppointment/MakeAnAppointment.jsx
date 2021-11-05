import React from "react";
import NewClient from "./NewClient/NewClient";
import OldClient from "./OldClient/OldClient";
import {
    Button,
    Grow,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
    root: {
        width: 345,
        height: 300,
    },
    media: {
        height: 140,
    },
});

function MediaCard({ client, setView }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                    onClick={() => setView(client.value)}
                    style={{
                        background:
                            "linear-gradient(to right, #11998e, #38ef7d)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {client.value === 0 && (
                        <PersonIcon
                            style={{ fontSize: "6rem", color: "white" }}
                        />
                    )}
                    {client.value === 1 && (
                        <BusinessIcon
                            style={{ fontSize: "6rem", color: "white" }}
                        />
                    )}
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {client.kind}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {client.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => setView(client.value)}
                >
                    Nuevo
                </Button>
            </CardActions>
        </Card>
    );
}

function MenuOptions({ setView }) {
    const clients = [
        {
            kind: "Cliente nuevo",
            description:
                "Crea una cita para un cliente que no esta registrado en la empresa.",
            value: 0,
        },
        {
            kind: "Cliente de la empresa",
            description: "Crea una cita para un cliente registrado.",
            value: 1,
        },
    ];
    return (
        <Grow in>
            <div
                style={{
                    padding: "2rem",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                {clients.map((client, index) => (
                    <MediaCard client={client} setView={setView} key={index} />
                ))}
            </div>
        </Grow>
    );
}

export default function MakeAnAppointment() {
    /* 0 - New Client,  1 - Old Client, 2 - Buttons options */
    const [viewRender, setView] = React.useState(2);

    return (
        <>
            {viewRender === 2 && (
                <>
                    <Typography variant="h4">Nueva cita</Typography>
                    <MenuOptions setView={setView} />
                </>
            )}
            {viewRender === 1 && <OldClient setView={setView} />}
            {viewRender === 0 && <NewClient setView={setView} />}
        </>
    );
}
