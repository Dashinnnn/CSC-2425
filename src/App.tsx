import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

interface TaskProps {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [currentTask, currentSetTask] = useState<string>("");
  const [tasks, setTasks ] = useState<TaskProps[]>([]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    currentSetTask(event.target.value);
  };

  const addTask = () => {
    if(currentTask) {
      setTasks([...tasks, { id: Math.random(), text: currentTask, completed: false }]);
      currentSetTask("");
    }
  }

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(currentTask =>
      currentTask.id === taskId ? { ...currentTask, completed: !currentTask.completed } : currentTask
    ));
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter(currentTask => currentTask.id !== taskId))
  }

  return (
    
    <Fragment>
      <div>Todo-List</div>

      <input 
        type="text"
        value={currentTask}
        onChange={handleInputChange}
        placeholder="Add a task"
        
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(currentTask => (
          <li key={currentTask.id} style={{ textDecoration: currentTask.completed ? "line-through" : "none"  }}>
            <input 
            type="checkbox"
            checked={currentTask.completed}
            onChange={() => toggleTaskCompletion(currentTask.id)}
             />
             {currentTask.text}
             <br />
             {currentTask.id}

             <button onClick={() => removeTask(currentTask.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default App;