import React, {useState} from "react";
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

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const providerValue = {
        currentTheme: themes[theme],
        toggleTheme() {
            setTheme(theme === "light" ? "dark" : "light");
        }
    }

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
}
