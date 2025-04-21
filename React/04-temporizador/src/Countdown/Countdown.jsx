import { useState, useEffect } from "react"

function CountDown() {
    const [seconds, setSeconds] = useState(null)
    const [elapsedSeconds, setElapsedSeconds] = useState(0)

    useEffect(() => {
        if (seconds === null) return
        setElapsedSeconds(0)
        const i = setInterval(() => setElapsedSeconds(x => x + 1), 1000)
        return () => clearInterval(i)
    }, [seconds])

    const submit = e => {
        e.preventDefault()
        setSeconds(parseInt(e.target.seconds.value))
    }

    if (seconds !== null && elapsedSeconds <= seconds) return <p>Han pasado {elapsedSeconds}</p>
    if (seconds !== null) return <p>Se ha completado</p>

    return (
        <>
            <p>Cuantos segundos quieres contar?</p>
            <form onSubmit={submit}>
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </>
    )
}

export default CountDown
