import useThemeContext from "./Hooks/useTheme.js";

export default function Toggle() {
    const theme = useThemeContext()

    return (
        <label className="switch">
            <input type="checkbox" onClick={theme.toggleTheme}/>
            <span className="slider round"/>
        </label>
    )
}
