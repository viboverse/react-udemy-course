import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodoContext } from "../store/todos-context";

export default function Todos() {
  const todosCtx = useContext(TodoContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
}
