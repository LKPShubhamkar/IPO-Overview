import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./page/Main";
import Details from "./page/Details";
import Login from "./page/Login";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./context/AuthGuard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/LKP-IPO">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path="/ipos" element={<MainLayout />} />
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
