import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/pricing" element={<h1>Pricing</h1>} />
      <Route path="/demo" element={<h1>Demo</h1>} />
      <Route path="/integrations" element={<h1>integrations</h1>} />
    </Routes>
  );
}