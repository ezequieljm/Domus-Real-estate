// React Lib
import React from "react";

//Application Components
import CardsContainer from "./Card/CardsContainer";
import StickyHeadTable from "./StickHeadTable/StickHeadTable";

//MaterialUI Components
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Grow } from "@material-ui/core";

const stylesOfContentCards = {
      display: "flex"
    , justifyContent: "space-between"
    , marginBottom: 20
    , marginTop: 20
}

const stylesOfPaper = {
    padding: "2rem",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}

const Request = () =>
    <Grow in>
        <Paper elevation={3} style={stylesOfPaper}>
            <Typography variant='h4'>Solicitudes</Typography>
            <CardsContainer stylesOfContentCards={stylesOfContentCards}/>
            <StickyHeadTable />
        </Paper>
    </Grow>

export default Request;