import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function ReqPage() {
    const [id, setId] = useState(1)

    useEffect(() => {
        handleGet();
    }, [id]);

    async function handleGet() {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(res);
    }

    const handlePost = useCallback(async () => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: "Criando com axios",
            content: "Algum conteúdo"
        });
        console.log(res);
    }, [])
    useEffect(() => {
        handlePost()
    }, [handlePost])

    return (
        <>
            Teste
            <button onClick={() => setId(id + 1)}>+</button>
        </>
    )
}