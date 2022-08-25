import { Box, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      padding="2rem"
      paddingLeft="4rem"
      paddingRight="4rem"
      color="#333"
      fontSize="1rem"
      className="navbar"
    >
      <Box display="flex" gap="3rem" id="navbox1">
        <NavLink to="/">EverHour</NavLink>
        <NavLink to="/integrations">Integrations</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/demo">Demo</NavLink>
      </Box>
      <Box display="flex" gap="2rem">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </Box>
    </Box>
  );
}

