import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useBind from "../../hooks/useBind";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import CryptoJS from 'crypto-js';
import { SECRET } from '../../SECRET';
import axios from 'axios';

export default function Register() {
    const [name, bindName, resetName] = useBind('');
    const [email, bindEmail, resetEmail] = useBind('');
    const [password, bindPassword, resetPassword] = useBind('');
    const [showPassword, setShowPassword] = useState(false)

    const eye = <FontAwesomeIcon icon={faEye} />
    
    const resetAll = () => {
        resetName()
        resetEmail()
        resetPassword()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const submit = async () => {
        const json = { name, email, password }
        const jsonCryptd = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString()
        try {
            var res = await axios.post("http://localhost:8080/api/auth/register", {jsonCryptd})
            resetAll()
        }
        catch (err) {
            console.log(err)
        }
    }

    const show = () => {
        setShowPassword(!showPassword)
    }


    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Name" {...bindName} />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Email" {...bindEmail} />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" {...bindPassword} />
                <span onClick={() => show()}><button style={{ height: "100%" }}>{eye}</button></span>
            </InputGroup>
            <Button style={{ width: "auto", marginTop: "1rem" }} type="submit" onClick={() => submit()}>Submit</Button>
        </Form>
    )
}