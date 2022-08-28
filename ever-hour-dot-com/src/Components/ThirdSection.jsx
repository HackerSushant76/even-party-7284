import { Avatar, Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Boxes } from './Boxes';
import { ImageSlider } from './ImageSlider';

const images = [
  { title: 'Asana', url: '/Asana.png' },
  { title: 'Trello', url: '/Trello.png' },
  { title: 'BaseCamp', url: '/baseCamp.png' },
  { title: 'Jira', url: '/jira.jpg' },
  { title: 'Github', url: '/github.png' },
  { title: 'ClickUp', url: '/clickUp.png' },
  { title: 'Monday', url: '/monday.png' },
  {title: "Notion" ,url:"/notion.png" },
];
const slides = [
  { url: "asana-primary.webp", title: "asana" },
  { url: "trello-primary.webp", title: "trello" },
  { url: "basecamp-primary.webp", title: "basecamp" },
  { url: "jira-primary.webp", title: "jira" },
  { url: "github-primary.webp", title: "github" },
  { url: "clickup-primary.webp", title: "github" },
  { url: "monday-primary.webp", title: "monday" },
  { url: "notion-primary.webp", title: "notion" }
];
export function ThirdSection() {
  return (
    <Box>
      <Box w="50%" m="auto" mt="5rem">
        <Heading  fontWeight="600" lineHeight="45px">
          Track time and watch progress inside the most popular apps
        </Heading>
      </Box>
      <Box display="flex" w= "max-content" m="auto" gap="25px"  mt="3rem">
        {images.map(elem=> <Box display="flex" gap="5px" alignItems="center">
            <Image src={elem.url} w="26px"/>
            <Text fontSize="25px">{elem.title}</Text>
        </Box>)}
      </Box>
      <ImageSlider slides={slides}/>
      <Boxes/>
    </Box>
  );
}
