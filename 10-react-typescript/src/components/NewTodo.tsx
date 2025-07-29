import { FormEvent, useContext, useRef } from "react";
import styles from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";

export default function NewTodo() {
  const todoCtx = useContext(TodoContext);

  const todoRef = useRef<HTMLInputElement>(null);

  function handleAddTodo(event: FormEvent) {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredTodo);

    todoRef.current!.value = "";
  }

  return (
    <form onSubmit={handleAddTodo} className={styles.form}>
      <label>Todo Text</label>
      <input type="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
}
