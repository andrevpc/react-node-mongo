import { useContext, useState } from "react";
import { StatementContext } from "../../context/statement";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useBind from "../../hooks/useBind";

export default function AddPayment() {
    const { addPayment } = useContext(StatementContext)
    const [value, bindValue, resetValue] = useBind('');
    const [wallet, bindWallet, resetWallet] = useBind('');

    const resetAll = () => {
        resetValue()
        resetWallet()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Carteira" {...bindWallet} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control  {...bindValue} />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <Form.Group controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
            </Form.Group>
            <Button type="submit">submit</Button>
            <Button type="button" onClick={() => resetAll()}>reset</Button>
        </Form>

    )
}