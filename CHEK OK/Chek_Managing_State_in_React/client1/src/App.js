import './App.css';
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style.css"; // Assure-toi d'ajouter ton fichier CSS

function App() {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches depuis localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Sauvegarder les tâches dans localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, complete: false }]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const editTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;


