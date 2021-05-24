import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const TodoField = (event) => {
    setTodo(event.target.value);
  };

  const AddTodo = () => {
    setList([...list, todo]);
    setTodo(" ");
  };
  return (
    <>
      <div className="main-div">
        <div className="todo-div">
          <h1>Todo List</h1>
          <div className="addTodo">
            <input
              type="text"
              name="todo"
              placeholder="Enter Todo"
              onChange={TodoField}
              value={todo}
            />
            <button onClick={AddTodo}>+</button>
          </div>
          <ol>
            {list.map((listVal) => {
              return <TodoList text={listVal} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
