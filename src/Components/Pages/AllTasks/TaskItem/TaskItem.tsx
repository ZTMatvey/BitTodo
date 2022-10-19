import React from 'react'
import Task from '../../../../Service/Task'
import Styles from '../AllTasks.module.scss'
import { CardBody, Card, CardTitle, CardHeader, CardText, Input, Button, CardFooter } from 'reactstrap'
import TaskProp from '../../../../Service/TaskProp'

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <Card
      className={`my-2 ${Styles.taskItem}`}
      color="dark"
      inverse
      style={{
        width: '18rem'
      }}
    >
      <CardHeader className={Styles.cardHeader}>
        {task.title}
        <div className={Styles.cardActions}>
          <Input type='checkbox' className={`${Styles.completed} ${Styles.actionBtn}`}/>
          <Button size="sm" className={Styles.actionBtn} color="danger" outline >
            <span className={`material-symbols-outlined`}>
              delete
            </span>
          </Button>
          <Button size="sm" className={Styles.actionBtn} color="info" outline >
            <span className={`material-symbols-outlined`}>
              import_contacts
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <CardText>
          {task.description}
        </CardText>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default TaskItem