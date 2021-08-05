import React from "react";

const ToDo = (props) => {
  console.log(props);
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.values.completed}
        onChange={() => {
          props.handleChange(props.values.id);
        }}
      ></input>
      <p>{props.values.text}</p>
    </div>
  );
};

export default ToDo;
