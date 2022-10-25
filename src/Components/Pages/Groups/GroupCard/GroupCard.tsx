import React from 'react'
import Styles from './Group.module.scss'
import { CardBody, Card, CardTitle, CardHeader, CardText, Input, Button, CardFooter } from 'reactstrap'
import { useAppDispatch } from '../../../../Service/Redux/Reducers/Hooks'

interface GroupCardProps {
  title: string
  description: string
  deleteButtonClick?: () => void
}

const GroupCard: React.FC<GroupCardProps> = ({ title, description, deleteButtonClick }) => {
  const deleteBtnClick = () => {
    if (deleteButtonClick !== undefined)
      deleteButtonClick();
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
        <div>{title}</div>
        <div className={Styles.cardActions}>
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

export default GroupCard