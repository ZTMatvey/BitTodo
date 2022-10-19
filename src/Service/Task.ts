import PriorityLevel from "./PriorityLevel";

class Task{
    constructor(public groupName: string, public title: string, public description: string, public priorityLevel: PriorityLevel, public isCompleted: boolean, public id: string) {
        
    }
}

export default Task;