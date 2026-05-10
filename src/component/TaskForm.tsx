import { useState } from "react";
import { Task } from "../types/task";

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;
        
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            description,
            status: "pending",
            createdAt: new Date().toISOString(),
        };

        onAddTask(newTask);

        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input 
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
            />
            <textarea 
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={styles.textarea}
            />
            <button className="" type="submit" style={styles.button}>Add Task</button>
        </form>
    );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    // marginBottom: "20px",
    margin: "0 auto 20px",
    width: "700px"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  },
};

export default TaskForm;