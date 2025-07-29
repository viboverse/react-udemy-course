import { createContext, ReactNode, useState } from "react";
import Todo from "../models/todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = createContext<todoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export default function ContexProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleTodo(todoText: string) {
    const newTodo = new Todo(todoText);
    setTodos((prev) => [newTodo, ...prev]);
  }

  function handleRemoveTodo(todoId: string) {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  }

  const todoCtx: todoContextObj = {
    items: todos,
    addTodo: handleTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodoContext.Provider value={todoCtx}>{children}</TodoContext.Provider>
  );
}
