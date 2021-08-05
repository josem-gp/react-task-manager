import React from "react";

const ToDo = (props) => {
  const handleClick = (clickedId) => {
    props.clickBox(clickedId);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.values.completed}
        onChange={() => {
          handleClick(props.values.id);
        }}
      ></input>
      <p>{props.values.text}</p>
    </div>
  );
};

export default ToDo;
