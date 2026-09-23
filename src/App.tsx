import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./page/Main";
import Details from "./page/Details";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter basename="/LKP-IPO">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ipos" element={<MainLayout />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
