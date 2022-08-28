import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {ImQuotesRight} from "react-icons/im"

export function FourthSection() {
  return (
    <Box id="fourth-sec">
      <Box>
        <Box>
          <Heading fontWeight="medium">
            Everhour has helped 240,000+ people complete over 135 million tasks
            in 3 million projects
          </Heading>
        </Box>
        <Box> <ImQuotesRight size="60px"/></Box>
        <Box>
          <Text>
            Everhour helps us track our engineering hours which is a requirement
            for several Government grants we have received. Without Everhour, we
            would be unable to accurately track the hours associated with each
            individual project we are working on as a company. The reports are
            easily customizable which allows me to extract the data I need.
            Everhour is a great tool for our time tracking needs!
          </Text>
          <br />
          <Text><b>Kelly Bonneau, CPA</b></Text>
          <Text>Accounting Manager at <b>7shifts</b></Text>
        </Box>
      </Box>
      <Box>
  
        <Image src="customer-kelly.webp" width="80%" />
      </Box>
    </Box>
  );
}
