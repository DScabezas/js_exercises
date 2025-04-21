import { useState } from "react"
import "./App.css"

function App() {
  const [tarea, setTarea] = useState("")
  const [todos, setTodos] = useState([])

  function handleChange(e) {
    const value = e.target.value
    setTarea(value)
  }

  function handleSummit(e) {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      tarea: tarea,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <>
      <form onSubmit={e => handleSummit(e)}>
        <input onChange={e => handleChange(e)} type="text" value={tarea} />
        <input onClick={e => handleSummit(e)} type="submit" value="Enviar" />
      </form>
      {todos.map(item => (
        <div key={item.id} className="listContainer">
          <p>{item.tarea}</p>
          <div className="listActions">
            <input type="checkbox" />
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default App
