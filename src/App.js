import { useState } from "react";
import Tasks from "./components/Tasks";

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
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const handleDeleteTask = (id) => {
    // const newTodoList = todoList.filter((task)=>task !== taskName)
    // setTodoList(newTodoList)
    // instead we can do it in one line

    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const handleCompleteTask=(id)=>{
    setTodoList(
      todoList.map((task)=>{
      if(task.id === id){
        return { ...task,completed:true}
      }else{
        return task
      }
    }))
  }

  return (
    <div className="App">
      <div style={{backgroundColor:"darkgray"}} >
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

      <div>
        {todoList.map((task) => {
          return (
            <Tasks
              taskName={task.taskName}
              id={task.id}
              deleteTask={handleDeleteTask}
              completeTask={handleCompleteTask}
              completedTask={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}
