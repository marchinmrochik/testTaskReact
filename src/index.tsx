import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./view";
import {Provider} from "react-redux";
import {store} from "./init/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
