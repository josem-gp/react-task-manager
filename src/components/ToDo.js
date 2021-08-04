import React from "react";

const ToDo = (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      <p>{props.values.text}</p>
    </div>
  );
};

export default ToDo;
