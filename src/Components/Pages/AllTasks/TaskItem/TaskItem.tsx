import React from 'react'
import Task from '../../../../Service/Task'

interface TaskItemProps{
    task: Task
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  return (
    <div>{task.text}</div>
  )
}

export default TaskItem