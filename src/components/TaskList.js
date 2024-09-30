import React, { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, [statusFilter, priorityFilter]);
  
  const fetchTasks = async () => {
    try {
      const url = "http://localhost:5000/api/tasks"; // Correct the URL
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      setTasks(data.tasks); // Assuming the response is structured as { tasks: [...] }
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };
  

  const handleAddTask = () => {
    navigate("/task_form"); // Navigate to TaskForm page
  };

  return (
    <div className="container">
      <h2>Your Tasks</h2>
      <div>
        <label>Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label>Priority:</label>
        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <p>Assigned To: {task.assignedUser}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTask}>Add New Task</button> {/* Button to open TaskForm */}
    </div>
  );
}

export default TaskList;
