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

    return (
        <div className={`App theme-${theme}`}>
            <ThemeContext.Provider value={{
                currentTheme:themes[theme],
                toggleTheme() {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }
            }}>
                <Toggle/>
                <List/>
            </ThemeContext.Provider>
        </div>
    )
}

export default Theme
