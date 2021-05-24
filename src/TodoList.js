import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="list-style">
        <i className="fas fa-times-circle" aria-hidden="true"></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
