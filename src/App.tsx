import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import TaskForm from './component/TaskForm'
import TaskItem from './component/TaskItem'
import { Task } from './types/task'

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  // ADD TASK
  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // DELETE TASK
  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // TOGGLE COMPLETE
  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  return (
    <>
      <div>
        <Header />
        <TaskForm onAddTask={handleAddTask} />
        {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
      </div>
    </>
  )
}

export default App;
