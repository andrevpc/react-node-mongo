import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    return(
        <>
            { num }
        </>
    )
}