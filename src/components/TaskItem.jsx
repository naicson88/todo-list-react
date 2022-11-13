import React from "react";
import "./TaskItem.css"
import {CgClose, CgInfo} from 'react-icons/cg'
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const TaskItem = ({task, handleTaskClick, handleTaskRemotion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <>
            <div className="task-container" key={task.id} style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>

                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>

                <div className="buttons-container">
                      <button className="remove-task-button"  onClick={() => handleTaskRemotion(task.id)}>
                            <CgClose></CgClose>
                      </button> &nbsp;
                      <button className="see-task-details"  onClick={handleTaskDetailsClick}>
                            <CgInfo></CgInfo>
                      </button>
                </div>
            </div>
        </>
    )
};

export default TaskItem;