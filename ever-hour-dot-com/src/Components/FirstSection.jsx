import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import {AiOutlineStar,AiTwotoneStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"

export function FirstSection(){
    const [email,setEmail] = useState("")
    const handleSubmit=()=>{
        console.log(email)
    }
    return (
        <Box w="70%" m="auto" mt="2rem">
            <Box display="flex" w="max-content" m="auto" alignItems="center">
                <AiTwotoneStar color="rgb(255, 219, 88)" size="22px"/>
                <AiTwotoneStar color="rgb(255, 219, 88)" size="22px"/>
                <AiTwotoneStar color="rgb(255, 219, 88)" size="22px"/>
                <AiTwotoneStar color="rgb(255, 219, 88)" size="22px"/>
                <BsStarHalf color="rgb(255, 219, 88)" size="19px"/> 
                <Text className="text" ml="1rem">4.5 [500+ reviews]</Text>       
            </Box>
           
            <Heading size="2xl" fontWeight="semibold" lineHeight="60px">Powerful time tracking software with hassle-free integrations</Heading>
            <br />
            <Text className="text">Accurate time tracker for budgeting, client invoicing and painless payroll.</Text>
            <Text className="text">Works with the apps your team already use</Text>
            <br />
            <br />
            <Box>
                <Input w="360px" h="48px" placeholder="Work email..." onChange={(e)=>setEmail(e.target.value)}/>
                <Button id="try-button" onClick={handleSubmit} >Try free</Button>
                <Text color="grey" mt="5px">Or sign up with Google Account</Text>
            </Box>
            
        </Box>
    )
}