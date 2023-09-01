import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useBind from "../../hooks/useBind";
import axios from "axios";

export default function MusicForm() {
    const [title, bindTitle, resetTitle] = useBind('');
    const [author, bindAuthor, resetAuthor] = useBind('');
    const [label, bindLabel, resetLabel] = useBind('');
    const [releaseDate, bindReleaseDate, resetReleaseDate] = useBind(new Date());

    const resetAll = () => {
        resetTitle()
        resetAuthor()
        resetLabel()
        resetReleaseDate()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handlePost = async () => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            author: author,
            label: label,
            releaseDate: releaseDate
        });
        console.log(res);
    } catch (err) {
        console.log(err)
    }
    }

    const submit = () => {
        handlePost()
        resetAll()
    }


    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Titulo" {...bindTitle} />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Autor" {...bindAuthor} />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Gravadora" {...bindLabel} />
            </InputGroup>
            <Form.Group controlId="dob">
                <Form.Control placeholder="Data da lançamento" {...bindReleaseDate} type="date" name="dob" />
            </Form.Group>
            <Button type="submit" onClick={() => submit()}>submit</Button>
        </Form>

    )
}