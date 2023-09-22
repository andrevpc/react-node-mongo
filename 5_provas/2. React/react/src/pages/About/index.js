import Styles from "./styles.module.css";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";

export default function AboutPage() {
    const { isDarkMode } = useContext(DarkModeContext)

    return (
        <div className={isDarkMode ? "darkMode" : ""}>
            <div id={Styles.txtDiv}>
                <div id={Styles.txt}>
                    <a>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </a>
                </div>
            </div >
        </div>
    )
}