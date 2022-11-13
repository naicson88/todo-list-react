import React from "react";
import { useParams } from "react-router-dom";

import ButtonReact from "./Button";
import './TaskDetails.css'
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    
    return (
        <>
            <div className="back-button-container">
                <ButtonReact onClick={handleBackButtonClick}>Voltar</ButtonReact>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle.charAt(0).toUpperCase() + params.taskTitle.slice(1) }</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias obcaecati. Nesciunt labore quod 
                    similique laboriosam praesentium nostrum earum fugit rerum, delectus expedita esse vitae sed error est repudiandae tempora?</p>
            </div>
        </>
    )
}

export default TaskDetails