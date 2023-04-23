import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import './App.css'
import Register from "./components/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/messenger/login" element={<Login />} />
      <Route path="/messenger/register" element={<Register />} />
    </Routes>
  );
};

export default App;
