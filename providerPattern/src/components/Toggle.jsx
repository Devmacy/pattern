import useThemeContext from "../Hooks/useTheme.js";

export default function Toggle() {
    const {toggleTheme} = useThemeContext()

    return (
        <label className="switch">
            <input type="checkbox" onClick={toggleTheme}/>
            <span className="slider round"/>
        </label>
    )
}
