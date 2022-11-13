import React from "react";
import { useState } from "react";
import "./AddTask.css"
import ButtonReact from "./Button";

const AddTask = ({handleTaskaAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) =>{
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskaAddition(inputData);
        setInputData('')
    } 

    return (
        <div className="add-task-container ">            
            <input 
            type="text" 
            onChange={handleInputChange}
            value={inputData}
            className="add-task-input"/>

            <div className="add-task-button-container">
                <ButtonReact onClick={handleAddTaskClick}>Adicionar</ButtonReact>
            </div>
        </div>
    )
}

export default AddTask