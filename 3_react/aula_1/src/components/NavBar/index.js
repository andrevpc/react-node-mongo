import { DarkModeContext } from '../../context/darkMode';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from './styled';
import useDark from "../../hooks/useDark";
import { useContext } from 'react';
import { MdDarkMode } from 'react-icons/md';

export default function NavBar() {
    const [dark, darkMode] = useDark('dark', 'primary')
    const { isDarkMode } = useContext(DarkModeContext)
    
    const click = () => {
        darkMode()
    }

    return (
        <Navbar expand="lg" bg={isDarkMode ? 'dark' : 'primary'} {...dark} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/sobre">Sobre</NavLink>
                        <NavLink to="/aulas">Aulas</NavLink>
                        <NavLink to="/extrato">Extrato</NavLink>
                        <NavLink to="/adicionarPagamento">Adicionar Pagamento</NavLink>
                        <NavLink to="/api">Paises</NavLink>
                        <button onClick={() => click()}><MdDarkMode/></button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}