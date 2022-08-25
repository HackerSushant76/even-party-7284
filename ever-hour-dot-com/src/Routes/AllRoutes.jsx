import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<h1>SignUp Page</h1>} />
      <Route path="/pricing" element={<h1>Pricing</h1>} />
      <Route path="/demo" element={<h1>Demo</h1>} />
      <Route path="/integrations" element={<h1>integrations</h1>} />
    </Routes>
  );
}
