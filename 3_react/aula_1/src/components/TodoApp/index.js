import React from "react";
import useInput from "../../hooks/useInput";
import "./style.css";
import useArray from "../../hooks/useArray";

export default function TodoApp() {
  const [todo, setTodo, resetTodo] = useInput("");
  const todoList = useArray([]);

  const addItem = e => {
    e.preventDefault();
    if (todo === "") return;
    todoList.addItem(todo);
    resetTodo();
  };

  const RenderList = () => {
    return todoList.list.map(todo => {
      return (
        <tr key={todo.id}>
          <td className={todo.completed ? "todo-completed" : undefined}
            onClick={() => todoList.toggleItem(todo.id)}>{todo.text}
          </td>
          <td>
            <button onClick={() => todoList.removeItem(todo.id)}>X</button>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="container">
      <form>
        <h1>Lista de tarefas</h1>
        <input onChange={setTodo} value={todo} />
        <button onClick={addItem}> Add </button>
      </form>

      <table>
        <tbody>
          < RenderList />
        </tbody>
      </table>
    </div>
  );
}