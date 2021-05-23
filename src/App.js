import React from "react";

const App = () => {
  return (
    <>
      <div className="main-div">
        <div className="todo-div">
          <h1>Todo List</h1>
          <div className="addTodo">
            <input type="text" placeholder="Enter Todo" />
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
