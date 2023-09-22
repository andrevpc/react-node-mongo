import { useContext, useState } from "react";
import axios from "axios";
import { AlertContext } from "../context/alert";

function useCEP(cep) {
    const { setMessage, setShow, setVariant } = useContext(AlertContext);
    const [response, setResponse] = useState({})

    async function handleCep(e) {
        e.preventDefault();
        if (!formValid()) return

        try {
            const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(res.data)
            if (res.data.erro) {
                throw new Error
            }
            setResponse(res.data)
        } catch (error) {
            console.log(error);
            setMessage("Cpf inválido");
            setShow(true);
            setVariant('danger');
        }
    }

    function formValid() {
        if (cep.length < 8) {
            setMessage('CEP deve conter 8 números')
            setShow(true);
            setVariant('danger')
            return false;
        }

        return true
    }
    return { response, handleCep };
}

export default useCEP