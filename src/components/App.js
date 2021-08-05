import React, { useState } from "react";
import ToDo from "./ToDo";
import todosData from "../taskData";

function App() {
  const [clicked, setClicked] = useState();

  const clickBox = (id) => {
    console.log(`Clicked ${id}`);
  };

  console.log(clicked);

  const todoData = todosData.map((element) => (
    <ToDo key={element.id} values={element} clickBox={clickBox} />
  ));
  return <div className="todo-list">{todoData}</div>;
}

export default App;
