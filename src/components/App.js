import React, { useState } from "react";
import ToDo from "./ToDo";
import todosData from "../taskData";

function App() {
  // const [clicked, setClicked] = useState()

  const handleChange = (id) => {
    console.log(`Clicked ${id}`);
  };

  const todoData = todosData.map((element) => (
    <ToDo key={element.id} values={element} handleChange={handleChange} />
  ));
  return <div className="todo-list">{todoData}</div>;
}

export default App;
