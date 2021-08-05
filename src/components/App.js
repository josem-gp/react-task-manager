import React, { useState } from "react";
import ToDo from "./ToDo";
import todosData from "../taskData";

function App() {
  const [clicked, setClicked] = useState(todosData);

  const clickBox = (id) => {
    const mappedBox = clicked.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });

    setClicked(mappedBox);
  };

  const todoData = todosData.map((element) => (
    <ToDo key={element.id} values={element} clickBox={clickBox} />
  ));
  return <div className="todo-list">{todoData}</div>;
}

export default App;
