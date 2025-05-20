import { useState } from "react";
import Results from "./components/Restults";
import UserInput from "./components/UserInput";

function App() {
  const [inputs, setInput] = useState({});

  function handleUserInput(enteredInput) {
    setInput(enteredInput);
  }

  return (
    <>
      <UserInput onSubmit={handleUserInput} />
      <Results inputs={inputs} />
    </>
  );
}

export default App;
