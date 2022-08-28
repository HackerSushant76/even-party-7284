import { Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Demo } from "./Demo";
import { Home } from "./Home";
import { Login } from "./Login";
import { Pricing } from "./Pricing";
import { Signup } from "./Signup";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/demo" element={<Demo/>} />
      <Route path="/integrations" element={<Heading mt={50} mb={100}>Integrations</Heading>} />
    </Routes>
  );
}
