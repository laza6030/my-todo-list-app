import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import SignUp from "./pages/SignUp";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
    </Routes>
  );
};

export default App;
