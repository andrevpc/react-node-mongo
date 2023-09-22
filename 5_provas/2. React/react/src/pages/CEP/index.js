import { Container, Form, InputGroup } from "react-bootstrap";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";
import svg_locator from '../../img/locator.svg'
import useBind from "../../hooks/useBind";
import AlertComponent from "../../components/Alert"
import useCEP from "../../hooks/useCEP";

export default function CEP() {
    const { isDarkMode } = useContext(DarkModeContext)
    const [cep, bindCep, resetCep] = useBind()
    const { response, handleCep } = useCEP(cep)

    const func = () => {
        document.body.classList.add("darkMode");
    }

    return (
        <div className={isDarkMode ? "darkMode" : ""}>
            <Container>
                <AlertComponent />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><img src={svg_locator} width={25} /></InputGroup.Text>
                    <Form.Control
                        placeholder="CEP"
                        aria-label="CEP"
                        {...bindCep}
                        onBlur={handleCep}
                    />
                </InputGroup>
                <Form.Group className="mb-3">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control placeholder={response.logradouro} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control placeholder={response.bairro} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control placeholder={response.localidade} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control placeholder={response.uf} disabled />
                </Form.Group>
            </Container>
        </div>
    )
}