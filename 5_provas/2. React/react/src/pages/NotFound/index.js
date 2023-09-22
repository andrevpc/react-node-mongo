import Styles from "./styles.module.css";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";

export default function NotFound() {
    const { isDarkMode } = useContext(DarkModeContext)

    return (
        <div className={isDarkMode ? "darkMode" : ""}>
            <div id={Styles.txtDiv}>
                <div id={Styles.txt}>
                    <h1 style={{ fontSize: "10rem", color: "red" }}>404</h1>
                    <h1 style={{ textAlign: "center" }}>Pedimos desculpas, mas a página que procura não está disponível.</h1>
                </div>
            </div >
        </div>
    )
}