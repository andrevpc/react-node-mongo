import { useEffect, useState } from "react";

export default function PageNameChange() {
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setFlag(true)
            document.title = 1 + + document.title
        }, 5000); 

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        document.title = 0
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setFlag(false)
        }, 3000)
    }, [flag])
    

    return (
        <div>
            {flag &&
                <h4>Alerta</h4>
            }
        </div>
    )
}