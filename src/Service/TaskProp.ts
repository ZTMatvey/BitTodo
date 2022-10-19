import Task from "./Task";

interface TaskProp{
    task: Task
    deleteButtonClicked(id: string): void
    openButtonClicked(id: string): void
}
export default TaskProp;