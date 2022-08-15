import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import "./App.css";

const App = () => {
  const token = localStorage.getItem("token");

  if (!token) return <SignIn />;

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
