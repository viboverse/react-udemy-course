import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ContexProvider from "./store/todos-context";

function App() {
  return (
    <ContexProvider>
      <Todos />
      <NewTodo />
    </ContexProvider>
  );
}

export default App;
