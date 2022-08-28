import { Box, Button, Image, Text } from '@chakra-ui/react';
import {CgCopyright} from "react-icons/cg"
import {FaFacebook} from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {ImYoutube} from "react-icons/im"

const company = [
  { path: '', title: 'About us' },
  { path: '', title: 'Contact' },
];
const Product = [
  { path: '', title: 'Tour' },
  { path: '', title: 'Pricing' },
  { path: '', title: 'Request a demo' },
  { path: '', title: 'Customers' },
  { path: '', title: 'API & docs' },
  { path: '', title: 'Status' },
];
const solutions = [
  { path: '', title: 'Time tracking' },
  { path: '', title: 'Project budgeting' },
  { path: '', title: 'Visual Planning' },
  { path: '', title: 'Expenses' },
  { path: '', title: 'Reporting' },
  { path: '', title: 'Invoicing' },
  { path: '', title: 'Time card calculator' },
  { path: '', title: 'Weekly timesheet template' },
  { path: '', title: 'Invoicer generator' },
];
const integrations = [
  { path: '', title: 'Asana' },
  { path: '', title: 'Basecamp' },
  { path: '', title: 'Trello' },
  { path: '', title: 'Jira' },
  { path: '', title: 'Github' },
  { path: '', title: 'Clickup' },
  { path: '', title: 'Monday' },
  { path: '', title: 'Notion' },
  { path: '', title: 'Todoist' },
  { path: '', title: 'GitLab' },
  { path: '', title: 'All' },
];
const learn = [
  { path: '', title: 'Resources' },
  { path: '', title: 'Help Center' },
  { path: '', title: 'Blog' },
  { path: '', title: 'Product Updates' },
  { path: '', title: 'Timesheet app' },
  { path: '', title: 'Time clock app' },
  { path: '', title: 'Attendance Tracker' },
  { path: '', title: 'Work hours tracker' },
  { path: '', title: 'Employee time tracking' },
];
const download = [
  { path: '', title: 'Browser extension' },
  { path: '', title: 'Chrome time tracking extension' },
  { path: '', title: 'Time tracking with screenshots' },
  { path: '', title: 'Iphone app' },
];
export function Footer() {
  return (
    <Box bg="rgb(17, 17, 17)" color="white" paddingBottom="50px" paddingTop="70px" mt="100px">
      <Box id="footer">
        <Box w="max-content">Everhour</Box>
        <Box>
          <b>Company</b>
          {company.map(elem => (
            <Text>{elem.title}</Text>
          ))}
        </Box>
        <Box>
          <b>Product</b>
          {Product.map(elem => (
            <Text>{elem.title}</Text>
          ))}
        </Box>
        <Box>
          <b>Solutions</b>
          {solutions.map(elem => (
            <Text>{elem.title}</Text>
          ))}
        </Box>
        <Box>
          <b>Integraions</b>
          {integrations.map(elem => (
            <Text>{elem.title}</Text>
          ))}
        </Box>
        <Box>
          <b>Learn</b>
          {learn.map(elem => (
            <Text>{elem.title}</Text>
          ))}
        </Box>
        <Box>
          <b>Download</b>
          {download.map(elem => (
            <Text>{elem.title}</Text>
          ))}
        </Box>
      </Box>
      <Box  display="flex" justifyContent="space-between" marginLeft="100px" >
        <Box textAlign="left" display="flex"  fontSize="13px">
            <span><CgCopyright /></span><span>2022 Everhour</span><span style={{marginLeft:"40px"}}>Terms | Privacy | Cookies | Sitemap</span>
        </Box>
        <Box  display="flex" gap="5px" marginRight="100px">
            <FaFacebook  size="22px"/>
            <AiFillTwitterCircle size="22px"/>
            <FaLinkedin size="22px"/>
            <ImYoutube size="22px"/>
            </Box>
      </Box>
    </Box> 
  );
}
