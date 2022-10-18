import React from 'react'
import Task from '../../../Service/Task'
import TaskItem from './TaskItem/TaskItem';

interface AllTasksProps {
    tasks: Task[];
}

const AllTasks: React.FC<AllTasksProps> = ({ tasks }) => {
    var renderTasks = tasks.map(t => <TaskItem task={t} />);
    return (
        <div>{renderTasks}</div>
    )
}

export default AllTasks