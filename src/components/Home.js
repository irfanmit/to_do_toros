import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Home() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleViewTasks = () => {
    navigate("/tasks");
  };

  return (
    <div className="container">
      <h1>Welcome to the Task Management App</h1>
      <p>
        This application helps you manage your tasks effectively. You can create, update,
        assign, and track the status of your tasks.
      </p>

      {!user ? (
        <div>
          <button onClick={handleLogin}>Login to Your Account</button>
        </div>
      ) : (
        <div>
          <h2>Welcome back, {user.username}!</h2>
          <button onClick={handleViewTasks}>View Your Tasks</button>
        </div>
      )}
    </div>
  );
}

export default Home;
