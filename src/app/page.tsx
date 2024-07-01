"use client"

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>(["todo 1", "todo 2", "todo 3"])

  const filtered = useMemo(() => todos, [todos])

  const filter2 = () => {
    console.log("rendered")
    return todos
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return <div>
    <h1>Todo app</h1>
    <h2>Todos:</h2>
    {filter2().map((todo, index) => <div key={index}>
      {todo}
      <button onClick={() => deleteTodo(index)}>delete</button>
    </div>)}
  </div>
}

"JSX"