import React, { useState } from 'react'
import { Label, Input, FormGroup, Button } from 'reactstrap'
import PriorityLevel from '../../../Service/PriorityLevel'
import { useAppDispatch, useAppSelector } from '../../../Service/Redux/Reducers/Hooks'
import { addTask } from '../../../Service/Redux/Reducers/TasksSlice'
import Task from '../../../Service/Task'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewTask = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const groups = useAppSelector(x=>x.AllTasks.groups);
  const groupOptions = groups.map(x=> <option key={x.id}>{x.name}</option>);
  const add = () => {
    const task = new Task("Свое", title, description, PriorityLevel.First, false, '1');
    toast.success(`Задача "${task.title}" добавлена`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(addTask(task));
  };
  return (
    <div>
      <FormGroup>
        <Label>
          Заголовок
        </Label>
        <Input placeholder='Заголовок' onChange={e => setTitle(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>
          Описание
        </Label>
        <Input type="textarea" placeholder='Описание' onChange={e => setDescription(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">
          Группа
        </Label>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          {groupOptions}
        </Input>
      </FormGroup>
      <Button onClick={add}>
        Добавить
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default AddNewTask