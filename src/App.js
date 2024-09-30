import React from "react";
import styles from "./App.css"
import AppRoutes from "./routes/AppRoutes"
import { UserProvider } from "./context/UserContext"; // Import the UserProvider

function App() {
  return (
    <UserProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </UserProvider>
  );
}

export default App;
