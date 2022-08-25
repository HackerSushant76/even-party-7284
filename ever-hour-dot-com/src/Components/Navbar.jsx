import { Avatar, Box, Button, Image, Img,  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    const logo_link ="https://comparecamp.com/media/uploads/2019/04/everhour-fav.png"
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft="4rem"
      paddingRight="4rem"
      color="#333333"
      fontSize="1rem"
      className="navbar"
    >
      <Box display="flex" gap="3rem" id="navbox1" alignItems="center">
        <NavLink to="/"><Image src= {logo_link} w="110px"/></NavLink>
        <NavLink to="/integrations">Integrations</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/demo">Demo</NavLink>
      </Box>
      <Box display="flex" gap="2rem" alignItems="center">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup"><Button  bg="#57bb71" color="white" fontWeight="light" p="5 20px" id="navbut"className="button-hover">Sign up</Button> </NavLink>
    </Box>
    </Box>
  )
}

