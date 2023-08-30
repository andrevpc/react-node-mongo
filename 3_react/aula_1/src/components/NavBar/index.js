import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from './styled';

export default function NavBar() {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        {/* <Navbar expand="lg" bg="dark" data-bs-theme="dark"> */}
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}