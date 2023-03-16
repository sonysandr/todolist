export default function Tasks(props) {
    return (
      <div
        className="App"
        style={{
          backgroundColor: props.completedTask ? "green" : "white"
        }}
      >
        <div>
          <h1>{props.taskName}</h1>
        </div>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
    );
  }
  
