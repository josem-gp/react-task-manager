import React from "react";
import ToDo from "./ToDo";
import todosData from "../taskData";

function App() {
  const todoData = todosData.map((element) => (
    <ToDo key={element.id} values={element} />
  ));
  return <div className="todo-list">{todoData}</div>;
}

export default App;
