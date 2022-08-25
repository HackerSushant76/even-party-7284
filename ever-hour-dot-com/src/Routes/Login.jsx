import {
    Box,
    Button,
    FormControl,
    Heading,
    Input,
    Text
  } from "@chakra-ui/react";
  
  export function Login() {
    return (
      <Box  w="80%"  m="auto" mt="2rem">
        <Box>
          <Heading size="2xl">Log in to Everhour</Heading>
          <Text color="grey" fontSize="22px" m="1rem">
            Using the former version of Everhour? Please login here
          </Text>
        </Box>
        <Box className="loginBox">
            <FormControl w="45%">
              <Button
              bg="white"
              fontWeight="light"
              width="100%"
              border="1px solid grey"
            >
              Log in with Google
            </Button> 
            <Text>or</Text>
              <Input type="email" placeholder="Enter you email" />
              <Input type="password" placeholder="Password" />
              <Input type="submit" value="Log in" />
            </FormControl>
          <Box w="45%" textAlign="left" >
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
  