import {
    Box,
    Button,
    FormControl,
    Heading,
    Input,
    Text
  } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
  
  export function Login() {
    const navigate = useNavigate()
    const {auth, handleLogin, handleLogout} = useContext(AppContext)
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        fetch("https://reqres.in/api/login",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(res => {
          console.log(res.token)
          handleLogin(res.token)
        })
        navigate("/")
    }
    console.log(loginData)
    return (
      <Box  w="70%"  m="auto" mt="2rem">
        <Box>
          <Heading size="2xl" fontWeight="semibold">Log in to Everhour</Heading>
          <br />
          <Text className="text">
            Using the former version of Everhour? Please login here
          </Text>
        </Box>
        <Box className="loginBox">
            <Box w="40%">
            <form  onSubmit={handleSubmit}>
              <Button>
              Log in with Google
              </Button> 
              <Text>or</Text>
               <Input 
                    type="email"
                    placeholder="Enter you email" 
                    name="email" 
                    value={loginData.email} 
                    onChange={handleChange}
                    />
              <Input 
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    value={loginData.password} 
                    onChange={handleChange}
                    />
              <Input type="submit" value="Log in" id="login-button" className="button-hover"/>
            </form>
            </Box>
          <Box w="40%" textAlign="left" >
            <Text>NEWS</Text>
            <Heading size="md" >Integration with Todoist</Heading>
            <Text color="#767676">Everhour now integrates with Todoist! Learn more</Text>
            <br/>
            <Heading size="md">Integration with Notion</Heading>
            <Text color="#767676">Everhour now integrates with Notion! Learn more</Text>
            <br/>
            <Heading size="md">Single Sign-On</Heading>
            <Text color="#767676">Use single sign-on (SSO) to access Everhour for your projects and timesheets. Learn more</Text>
          </Box>
        </Box>
      </Box>
    );
  }
  