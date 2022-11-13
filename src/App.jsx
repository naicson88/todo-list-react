import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React', completed: false },
    { id: 2, title: 'Fazer Entrevista IBM', completed: true },
    { id: 3, title: 'Codar projeto YuGiOh', completed: false },
  ])

  // useEffect(() => {
  //   console.log("task mudou")
  // }, [tasks]) <-------- Executa sempre que tasks mudar

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      
      setTasks(data)
    }
    fetchTasks();
  }, []) // <-------- Executa apenas no carregamento

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId)
        return { ...task, completed: !task.completed }
      else
        return task;
    });

    setTasks(newTasks);
  }

  const handleTaskaAddition = (taskTitle) => {
    const newTasks = [...tasks, { //"...tasks" tudo que está em tasks
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTasks);
  }

  const handleTaskRemotion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/" exact render={() => (
            <>
              <AddTask handleTaskaAddition={handleTaskaAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemotion={handleTaskRemotion} />
            </>
          )}
        />

        <Route path={"/:taskTitle"} exact component={TaskDetails} />

      </div>
    </Router>

  );
};

export default App