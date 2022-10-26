import React, { useState } from 'react'
import Task from '../../../../Service/Task'
import Styles from './TaskCard.module.scss'
import { CardBody, Card, CardTitle, CardHeader, CardText, Input, Button, CardFooter } from 'reactstrap'
import { useAppDispatch } from '../../../../Service/Redux/Reducers/Hooks'
import { setTaskCompletedState } from '../../../../Service/Redux/Reducers/TasksSlice'
import SetTaskCompletedStateDTO from '../../../../Service/DTO/SetTaskCompletedStateDTO'

interface TaskCardProps {
  task: Task
  deleteButtonClick: ()=> void
}

const TaskCard: React.FC<TaskCardProps> = ({ task, deleteButtonClick}) => {
  const [isCompleted, setCompleted] = useState(task.isCompleted);
  const deleteBtnClick = () => deleteButtonClick();
  const dispatch = useAppDispatch();
  const onStateChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setCompleted(event.currentTarget.checked);
    dispatch(setTaskCompletedState(new SetTaskCompletedStateDTO(task.id, event.currentTarget.checked)));
  }

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
        <div>{task.title}</div>
        <div className={Styles.cardActions}>
          <Input checked={isCompleted} onChange={onStateChange} type='checkbox' className={`${Styles.completed} ${Styles.actionBtn}`}/>
          <Button onClick={deleteBtnClick} size="sm" className={Styles.actionBtn} color="danger" outline >
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

export default TaskCard