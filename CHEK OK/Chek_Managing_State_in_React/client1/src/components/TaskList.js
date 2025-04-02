import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
