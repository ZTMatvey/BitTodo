import React, {useState, useEffect} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Task from '../../Service/Task';
import {useAppSelector, useAppDispatch } from '../../Service/Redux/Reducers/Hooks'
import { removeTask, closeRemoveTaskConfirmation } from '../../Service/Redux/Reducers/TasksSlice'

interface DeleteModalProps{ }

const DeleteModal: React.FC<DeleteModalProps> = () => {
    const dispatch = useAppDispatch();
    const task = useAppSelector(x=> x.AllTasks.focusedTask);
    const openedState = useAppSelector(x=>x.AllTasks.removeTaskConfirmationOpened);
    const toggle = ()=>{
        dispatch(closeRemoveTaskConfirmation());
    };
    const deleteTask = ()=>{
        toggle();
        dispatch(removeTask(task!.id));
    };
    if(!task)
        return <></>
    return (
        <Modal isOpen={openedState} toggle={toggle}>
            <ModalHeader toggle={toggle}>Вы уверены, что хотите удалить задачу "{task.title}"?</ModalHeader>
            <ModalBody>
                {task.description}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Отмена
                </Button>
                <Button color="danger" onClick={deleteTask}>
                    Удалить
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteModal