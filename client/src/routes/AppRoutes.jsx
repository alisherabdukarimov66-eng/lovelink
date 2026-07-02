import { Routes, Route } from "react-router-dom";
import Questions from "../pages/Questions";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipient from "../pages/Recipient";
import Theme from "../pages/Theme";
import LinkReady from "../pages/LinkReady";
import Receiver from "../pages/Receiver";
import Dashboard from "../pages/Dashboard";
import Answers from "../pages/Answers";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/l/:id" element={<Receiver />} />
      <Route path="/link-ready" element={<LinkReady />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/recipient" element={<Recipient />} />
      <Route path="/answers/:id" element={<Answers />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;