import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({tasks, handleTaskClick, handleTaskRemotion}) => {
    return(
        <>
            {tasks.map(task => <TaskItem task={task} handleTaskClick={handleTaskClick} handleTaskRemotion={handleTaskRemotion}/>)}
        </>
    )
}

export default Tasks