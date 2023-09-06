import { NavLink } from './styled';

export default function ClassesPage() {
    return (
        <>
            <a>Aula 1 até 3: </a>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/inputs">Inputs</NavLink>
            <NavLink to="/page">Page name change</NavLink>
            <NavLink to="/conditional">Conditional render</NavLink>
            <NavLink to="/saas">Using sass</NavLink>
            <NavLink to="/header">Header sass</NavLink>
            <NavLink to="/useCounter">Use counter</NavLink>
            <NavLink to="/todo">Todo app</NavLink>
            <p></p>
            <a>Aula 5: </a>
            <NavLink to="/counter-page">Counter Page</NavLink>
            <p></p>
            <a>Aula 6:</a>
            <NavLink to="/req">Request</NavLink>
            <NavLink to="/music">Music Forms</NavLink>
            <NavLink to="/api">API Paises</NavLink>
        </>
    )
}