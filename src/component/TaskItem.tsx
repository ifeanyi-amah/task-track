import { Task } from "../types/task";

interface TaskItemProps {
    task?: Task;
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
    if (!task) {
        return <p>Task not found</p>;
    }

    return (
        <div style={styles.card}>
            <h3 style={{
                textDecoration: task.status === "completed" ? "line-through" : "none",
            }}>
                {task.title}
            </h3>
            <p>{task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>

            <div style={styles.actions}>
                <button style={styles.adjust} onClick={() => onToggle(task.id)}>
                    {task.status === "pending" ? "Complete" : "Undo"}
                </button>
                <button style={styles.adjust} onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  adjust: {
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TaskItem;