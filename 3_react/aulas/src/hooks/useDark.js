import { DarkModeContext } from "../context/darkMode";
import { useState, useContext } from "react";

function useDark(defaultValue, defaultValue2) {
    const [value, setValue] = useState(defaultValue);
    const [value2, setValue2] = useState(defaultValue2);

    const { isDarkMode, darkMode } = useContext(DarkModeContext)
    
    const dark = {
        bg: '' + (isDarkMode ? value : value2),
        variant: '' + (isDarkMode ? value : value2)
    }

    return [dark, darkMode]
}

export default useDark