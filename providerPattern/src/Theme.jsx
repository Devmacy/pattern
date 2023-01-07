import React from "react";
import Toggle from "./Toggle";
import List from "./List";
import './toggle.css'
import {ThemeProvider} from "./components/ThemeProvider.jsx";

function Theme() {
    return (
        <div className={`App`}>
            <ThemeProvider>
                <Toggle/>
                <List/>
            </ThemeProvider>
        </div>
    )
}

export default Theme
