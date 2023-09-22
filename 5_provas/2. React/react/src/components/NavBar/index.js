import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DarkModeContext } from '../../context/darkMode';
import { useContext } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function NavBar() {
    const { isDarkMode, darkMode } = useContext(DarkModeContext)

    const click = () => {
        darkMode()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg={isDarkMode ? 'dark' : 'primary'} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/sobre'>Sobre</Link></Nav.Link>
                        <Nav.Link><Link to='/cep'>CEP</Link></Nav.Link>
                        <Nav.Link><Link to='/notFound'>Not Found</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant={isDarkMode ? 'dark' : 'primary'} onClick={() => click()}><MdDarkMode /></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}