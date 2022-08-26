import { Box, Button, Container, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [email,setEmail] = useState("")
    const navigate = useNavigate()
    const handleSubmit=()=>{
        if(email !== ""){
        navigate("/login")
        }
    }
    return(
        <Box w ="60%" m="auto" mt="4rem" >
                <Heading size="2xl" lineHeight="60px" fontWeight="semibold">Make your team more productive with Everhour</Heading>
                <br/>
                <Text color="grey" fontSize="18px">
                    Join 3,500+ customers who use Everhour to track time and plan their future projects more effectively
                    </Text>
            <br/>
            <br/>
            <Box  w ="40%" m="auto" display="flex" flexDirection="column" gap="10px">
                <Button bg="white" fontWeight="thin" border="1px solid grey" color="grey" height="3rem">Sign up with Google</Button>
                <Text>or</Text>
                <Input placeholder="Work email..." borderColor="grey" focusBorderColor= "black" height="3rem" onChange={(e)=>setEmail(e.target.value)}/>
                <Button onClick={handleSubmit} mt="20px" id="signup-button" className="button-hover" >Get Started</Button>
            </Box>
           
        </Box>
    )
}