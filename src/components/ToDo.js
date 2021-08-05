import React from "react";

const ToDo = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

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
      <p style={props.values.completed ? completedStyle : null}>
        {props.values.text}
      </p>
    </div>
  );
};

export default ToDo;
