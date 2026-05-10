import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskList = ({ tasks, onDelete, onToggle }: TaskListProps) => {
    if (tasks.length === 0){
        return <p>No Tasks Available.</p>
    }
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TaskList;