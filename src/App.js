import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };
  const handleAddTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };
    setTodoList([...todoList, task]);
  };

  const handleDeleteTask = (id) => {
    // const newTodoList = todoList.filter((task)=>task !== taskName)
    // setTodoList(newTodoList)
    // instead we can do it in one line

    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "darkgray" }}>
        <input
          onChange={handleNewTask}
          type="text"
          placeholder="Add tasks here"
        />
        <span>&nbsp;</span>
        <button style={{ backgroundColor: "green" }} onClick={handleAddTask}>
          Add List
        </button>
      </div>
      <div style={{ backgroundColor: "lightgray" }}>
        {todoList.map((task) => {
          return (
            <div
              style={{ display: "flex", flexFlow: "row", alignItems: "center" }}
            >
              <h1>{task.taskName}</h1>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
