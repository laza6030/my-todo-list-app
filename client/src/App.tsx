import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default App;
