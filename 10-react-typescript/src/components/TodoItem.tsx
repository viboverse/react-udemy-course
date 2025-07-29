import styles from "./TodoItem.module.css";

function TodoItem({
  text,
  onRemoveTodo,
}: {
  text: string;
  onRemoveTodo: () => void;
}) {
  return (
    <li onClick={() => onRemoveTodo()} className={styles.item}>
      {text}
    </li>
  );
}

export default TodoItem;
