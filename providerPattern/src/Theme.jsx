import React, {useState} from "react";
import Toggle from "./Toggle";
import List from "./List";
import './toggle.css'

export const ThemeContext = React.createContext({});

const themes = {
    light: {
        background: "#fff",
        color: "#000"
    },
    dark: {
        background: "#171717",
        color: "#fff"
    }
};

function Theme() {
    const [theme, setTheme] = useState('light')

    const providerValue = {
        theme:themes[theme],
        toggleTheme
    }

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className={`App theme-${theme}`}>
            <ThemeContext.Provider value={providerValue}>
                <Toggle/>
                <List/>
            </ThemeContext.Provider>
        </div>
    )
}

export default Theme
