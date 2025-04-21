import { useState } from "react"

function Counter() {
    const [contador, setContador] = useState(0);

    

    return (
        <>
            <button onClick={() => setContador(contador + 1)} >Boton</button>
            <p>Haz hecho {contador} clicks al boton</p>
        </>
    )
}

export default Counter