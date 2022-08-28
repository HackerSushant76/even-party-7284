import { Box, Text } from '@chakra-ui/react';

export function Boxes() {
  return (
    <Box  id ="box-cont">
      <Box>
        <Box>1</Box>
        <Box>
          <Text >Quick setup</Text>
          <Box>
          Connect Everhour with your tool and start tracking time right away. No manual project setup required.
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>2</Box>
        <Box>
          <Text>Native integration</Text>
          <Box>
          Time tracking controls natively appears inside your project management tool, making it easy to track time.
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>3</Box>
        <Box>
          <Text>Automatic updates</Text>
          <Box>
            Everhour syncs changes automatically. That means your reports will
            always show the freshest data.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
