import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { FifthSection } from "../Components/FifthSection";

export function Demo(){
    return(
        <>
        <Box mb={50} w= "70%" m="auto">
            <Heading size="2xl" mt={50} mb= "30px">Book a 30-min live demo </Heading>
            <Text className="text">10+ users? Let one of our customer success experts show you how Everhour works, with plenty of time set aside for questions</Text>
            <br />
            <br />
            <Button   
                 bg="#57bb71"
                color="white"
                fontWeight="light"
                p="5 20px"
                id="navbut"
                className="button-hover"
                mr={10}
                >Schedule Time</Button>
            <Button className="button-hover" color="green">Watch Videos</Button>
            <br />
            <br />
            <br />
            <br />
           
        </Box> 
        <FifthSection/>
        </>
    )
}