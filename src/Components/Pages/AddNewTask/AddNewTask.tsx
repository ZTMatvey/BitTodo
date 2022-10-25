import React, { useState } from 'react'
import { Label, Input, FormGroup, Button } from 'reactstrap'
import PriorityLevel from '../../../Service/PriorityLevel'
import { useAppDispatch, useAppSelector } from '../../../Service/Redux/Reducers/Hooks'
import { addTask } from '../../../Service/Redux/Reducers/TasksSlice'
import Task from '../../../Service/Task'
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../../Service/Toast'
import ToastNotificationType from '../../../Service/ToastNotificationType'
import Styles from './AddNewTask.module.scss'
import Form from '../../Form/Form'
import InputWithValidation from '../../InputWithValidatoin/InputWithValidation'
import { useValidatingInput } from '../../../Service/ValidatingInput'
import EmptyValidator from '../../../Service/Validators/EmptyValidator'
import CheckOnDefaultValidator from '../../../Service/Validators/CheckOnDefaultValidator'
import AddTaskDTO from '../../../Service/DTO/AddTaskDTO'

const AddNewTask = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(x => x.Groups.groups);
  const name = useValidatingInput([new EmptyValidator('Название не может быть пустым')]);
  const description = useValidatingInput([new EmptyValidator('Описание не может быть пустым')]);
  const group = useValidatingInput([new EmptyValidator('Группа не может быть пустой'), new CheckOnDefaultValidator("Это служебная опция", "default")]);
  const defaultOption = React.createRef<HTMLOptionElement>();
  const groupOptions: JSX.Element[] = groups.map(x => <option value={x.id} key={x.id}>{x.name}</option>);
  const add = () => {
    const task = new Task(group.value, name.value, description.value, PriorityLevel.First, false, '1');
    dispatch(addTask(new AddTaskDTO(name.value, description.value, group.value)));
  };
  return (
    <div>
      <Form title={<>Добавление задачи</>}>
        <InputWithValidation id='name' type='text' placeholder='Заголовок' validatorData={name} />
        <InputWithValidation id='description' type='textarea' placeholder='Описание' validatorData={description} />
        <InputWithValidation id='group' type='select' placeholder='Группа' validatorData={group}>
          <option value={'default'} ref={defaultOption} key='default'>Выберите группу</option>
          <>{groupOptions}</>
          </InputWithValidation>
      </Form>
      <Button disabled={name.valueHasError || description.valueHasError || group.valueHasError} onClick={add}>
        Добавить
      </Button>
    </div>
  )
}

export default AddNewTask