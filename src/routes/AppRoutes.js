import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy loading components
const Home = lazy(() => import('../components/Home'));
const TaskList = lazy(() => import('../components/TaskList'));
const TaskForm = lazy(() => import('../components/TaskForm'));
const Login = lazy(() => import('../components/Login'));
const Register = lazy(() => import('../components/Register')); // Import Register component

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* New route for registration */}
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/task_form" element={<TaskForm />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
