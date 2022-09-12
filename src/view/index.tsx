import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import {CssBaseline} from "@mui/material";

export const App = () => {
    return (<>
        <CssBaseline />
        <AppRoutes />
        </>);
};
