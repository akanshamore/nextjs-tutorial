"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([{ id: "123", text: "shopping" }]);
  const [inputText, setInputText] = useState("");

  const addToDo = () => {
    setTodos([...todos, { id: Date.now(), text: inputText }]);
  };

  const removetodo = (id) => {
    console.log("inside remove todo", id);
    const filteredtodos = todos.filter((todo) => todo.id !== id);
    console.log("filtered todos are", filteredtodos);
    setTodos(filteredtodos);
    console.log("todos are", todos);
  };

  return (
    <div>
      <h1>to do app</h1>
      <input type="text" placeholder="search tods" />
      <div>
        <input
          type="text"
          placeholder="enter your to do "
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addToDo}>Add</button>
        <button>Update</button>
        <button>Remove All</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <div>
                <button>Edit</button>
                <button onClick={() => removetodo(todo.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
