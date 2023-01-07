import React from "react";
import {ThemeContext} from "../components/ThemeProvider.jsx";

export default function useThemeContext() {
    const {currentTheme,toggleTheme} = React.useContext(ThemeContext);
    return {
        currentTheme,
        toggleTheme
    }
}
