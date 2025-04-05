import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert("Please enter both a task name and description.");
      return;
    }
    addTask({ name: taskName, description: taskDescription });
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task Name: </label>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label>Task Description: </label>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
