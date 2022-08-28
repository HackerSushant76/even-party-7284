import { Avatar, Box, Button, Image, Img, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

export function Navbar() {
  const { auth, handleLogout } = useContext(AppContext);
  console.log(auth);
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
        <NavLink to="/">
          <Image src="everhour-fav.png" w="110px" />
        </NavLink>
        <NavLink to="/integrations">Integrations</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/demo">Demo</NavLink>
      </Box>
      <Box display="flex" gap="2rem" alignItems="center">
        {auth.isAuth ? (
          <>
            <Avatar src="sush-pic2.webp"/>
            <Text color="#57bb71" fontWeight={700} fontSize={18}>
              Sushant
            </Text>
            <Button
              onClick={handleLogout}
              bg="#57bb71"
              color="white"
              fontWeight="light"
              p="5 20px"
              id="navbut"
              className="button-hover"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">
              <Button
                bg="#57bb71"
                color="white"
                fontWeight="light"
                p="5 20px"
                id="navbut"
                className="button-hover"
              >
                Sign up
              </Button>{' '}
            </NavLink>
          </>
        )}
      </Box>
    </Box>
  );
}
