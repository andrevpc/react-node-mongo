import { useContext } from "react";
import { StatementContext } from "../../context/statement";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useBind from "../../hooks/useBind";

export default function AddPayment() {
    const { addPayment } = useContext(StatementContext)
    const [value, bindValue, resetValue] = useBind('');
    const [wallet, bindWallet, resetWallet] = useBind();
    const [date, bindDate, resetDate] = useBind(new Date());

    const resetAll = () => {
        resetValue()
        resetWallet()
        resetDate()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const submit = () => {
        addPayment({
            Wallet: wallet,
            Date: date,
            Value: value
        })
        resetAll()
    }


    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Carteira" {...bindWallet} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder="Valor da tranferência"  {...bindValue} />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <Form.Group controlId="dob">
                <Form.Control placeholder="Data da transação" {...bindDate} type="date" name="dob" />
            </Form.Group>
            <Button type="submit" onClick={() => submit()}>submit</Button>
            <Button type="button" onClick={() => resetAll()}>reset</Button>
        </Form>

    )
}