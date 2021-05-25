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

  const deleteTodo = (id) => {
    setList(
      list.filter((arrElem, index) => {
        return index !== id;
      })
    );
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
            {list.map((listVal, index) => {
              return (
                <TodoList
                  id={index}
                  text={listVal}
                  key={index}
                  onSelect={deleteTodo}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
