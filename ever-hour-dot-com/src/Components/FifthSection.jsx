import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import {GoPrimitiveDot} from 'react-icons/go'

export function FifthSection() {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <Box display="flex" marginLeft="6rem">
      <Box textAlign="left">
        <Heading fontWeight="semibold" lineHeight="60px">
          Take control of your time with Everhour
        </Heading>
        <Text color="grey">
          Beautiful integrations. Intuitive interface. No unexpected fees
        </Text>
        <br />
        <br />
        <Box>
          <Input
            w="360px"
            h="48px"
            placeholder="Work email..."
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            id="try-button"
            className="button-hover"
            onClick={handleSubmit}
          >
            Try free
          </Button>
          <Text color="grey" mt="5px">
            Or sign up with Google Account
          </Text>
        </Box>
      </Box>
      <Box id="fifthsecbox2">
                <Box><GoPrimitiveDot color='#57bb71'/>Know where your team’s time is going</Box>
                <Box><GoPrimitiveDot color='#57bb71'/>Keep projects on budget</Box>
                <Box><GoPrimitiveDot color='#57bb71'/>Increase transparency</Box>
                <Box><GoPrimitiveDot color='#57bb71'/>Make your workflow more efficient</Box>
                <Box><GoPrimitiveDot color='#57bb71'/>Spot burnout before it happens</Box>
      </Box>
    </Box>
  );
}
