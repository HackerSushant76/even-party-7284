import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { AllRoutes } from "./Routes/AllRoutes";
import "./styles.css";
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      <AllRoutes/>
    </Box>
  );
}

export default App;
