import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, toggleComplete, editTask, index }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ name: task.name, description: task.description });

  const handleEdit = () => {
    if (editing) {
      editTask(index, updatedTask);
    }
    setEditing(!editing);
  };

  return (
    <div className="task-item">
      {editing ? (
        <div>
          <input
            type="text"
            value={updatedTask.name}
            onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
          />
          <input
            type="text"
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />
        </div>
      ) : (
        <div>
          <h3 style={{ textDecoration: task.complete ? "line-through" : "none" }}>
            {task.name}
          </h3>
          <p>{task.description}</p>
        </div>
      )}
      <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
      <button onClick={() => toggleComplete(index)}>
        {task.complete ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default TaskItem;
