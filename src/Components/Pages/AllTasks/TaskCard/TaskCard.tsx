import React from 'react'
import Task from '../../../../Service/Task'
import Styles from './TaskCard.module.scss'
import { CardBody, Card, CardTitle, CardHeader, CardText, Input, Button, CardFooter } from 'reactstrap'
import { useAppDispatch } from '../../../../Service/Redux/Reducers/Hooks'

interface TaskCardProps {
  title: string
  description: string
  deleteButtonClick: ()=> void
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, deleteButtonClick }) => {
  const deleteBtnClick = () => deleteButtonClick();
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
        <div>{title}</div>
        <div className={Styles.cardActions}>
          <Input type='checkbox' className={`${Styles.completed} ${Styles.actionBtn}`}/>
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
          {description}
        </CardText>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default TaskCard