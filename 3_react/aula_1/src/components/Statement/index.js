import { useContext } from "react";
import { StatementContext } from "../../context/statement";
import Styles from "./styles.module.css";

export default function Statement() {
    const { statementList } = useContext(StatementContext)

    const RenderList = () => {
        return statementList.map(s => {
            return (
                <tr>
                    <td id={ Styles.td }>{s.Wallet}</td>
                    <td id={ Styles.td }>{s.Date}</td>
                    <td id={ Styles.td }>{s.Value}</td>
                </tr>
            )
        })
    }

    const sum = statementList.reduce((partialSum, a) => partialSum + +a.Value, 0);

    return (
        <table id={ Styles.table }>
            <thead>
                <tr id={ Styles.tr }>
                    <th id={ Styles.th }>Carteira</th>
                    <th id={ Styles.th }>Data</th>
                    <th id={ Styles.th }>Valor</th>
                </tr>
            </thead>
            <tbody>
                <RenderList />
                <tr>
                    <td id={ Styles.td }>Total</td>
                    <td id={ Styles.td }></td>
                    <td id={ Styles.td }>{sum}</td>
                </tr>
            </tbody>
        </table>
    )
}