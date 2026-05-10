import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header'
import TaskForm from './component/TaskForm'
// import TaskItem from './component/TaskItem'
import { Task } from './types/task'
import TaskList from './component/TaskList'
import FilterButtons from './component/FilterButtons'

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saveTasks = localStorage.getItem("tasks");

    if (saveTasks){
      setTasks(JSON.parse(saveTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  // FILTER BUTTON
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending"){
      return task.status === "pending";
    }
    if (filter === "completed"){
      return task.status === "completed";
    }
    return true;
  });

  return (
    <>
      <div>
        <Header />
        <TaskForm onAddTask={handleAddTask} />
        {/* {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))} */}
      <TaskList 
        tasks={filteredTasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
      <FilterButtons 
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      </div>
    </>
  )
}

export default App;
