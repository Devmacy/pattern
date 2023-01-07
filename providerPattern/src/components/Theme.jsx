import useThemeContext from "../Hooks/useTheme.js";
import Toggle from "./Toggle.jsx";
import List from "./List.jsx";
import React from "react";
import '../css/ThemeProvider.css'

export default function Theme() {
    const {currentTheme} = useThemeContext()

    return (
       <div className={'App'} style={currentTheme}>
           <Toggle/>
           <List/>
       </div>
    )
}
