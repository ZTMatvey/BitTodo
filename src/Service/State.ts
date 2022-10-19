import { useState } from 'react';
import PriorityLevel from "./PriorityLevel";
import Task from "./Task";
import TaskProp from "./TaskProp";

class State{
    baseTasks: TaskProp[] = []
    activeTask?: Task = undefined
}
let state = new State();
for (let index = 0; index < 100; index++) {
    const taskProp: TaskProp = {
        task: new Task(
            "Собственное", 
            `Заголовок ${index.toString()}`, 
            `Описание ${index.toString()}`, 
            PriorityLevel.First, 
            false, 
            index.toString()),
            deleteButtonClicked: ()=> alert(`Удалить ${index.toString()}?`),
            openButtonClicked: ()=> alert(`Открыть ${index.toString()}?`),
    }
    state.baseTasks.push(taskProp);
}

export default state;