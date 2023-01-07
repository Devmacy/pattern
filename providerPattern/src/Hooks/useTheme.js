import React from "react";
import {ThemeContext} from "../Theme.jsx";

export default function useThemeContext() {
    const {currentTheme,toggleTheme} = React.useContext(ThemeContext);
    return {
        currentTheme,
        toggleTheme
    }
}
