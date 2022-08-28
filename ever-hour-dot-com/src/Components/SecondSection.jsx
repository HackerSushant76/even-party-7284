import { Box, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GiStopwatch } from 'react-icons/gi';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';

const images = [
  '/Time tracking.png',
  '/Billing.png',
  '/Task.png',
  'Visual planning.png',
  '/expenses.png',
  '/invoice.png',
];

const menus = [
  {
    title: 'Time tracking',
    desc: 'Easy-to-use time tracker. Know the time spent on tasks, hours of work, and breaks for each employee',
  },
  {
    title: 'Billing and budgeting',
    desc: 'Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications',
  },
  {
    title: 'Task management',
    desc: 'Create tasks, organize them in sections, add time estimates to keep everyone in the loop and on track',
  },
  {
    title: 'Visual planning',
    desc: 'View your team’s schedule, know how busy or available someone is, compare plan to the actual time spent',
  },
  {
    title: 'Expenses',
    desc: 'Track work-related expenses. Reimburse employees, use costs in project budgets, add to client invoices',
  },
  {
    title: 'Invoicing',
    desc: 'Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks',
  },
];

export function SecondSection() {
  const [imgUrl, setImgUrl] = useState('');
  const [index, setIndex] = useState(0);
  let i = 0;
  useEffect(() => {
    const id = setInterval(() => {
      if (i === images.length) {
        i = 0;
      }
      setIndex(i);
      setImgUrl(images[i]);
      i++;
    }, 3000);
    return () => clearInterval(id);
  }, [i]);

  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      ml={30}
      mt="5rem"
      mb="5rem"
    >
      <Box
        display="flex"
        gap="40px"
        flexDirection="column"
        textAlign="left"
        padding="1rem"
      >
        {menus.map((elem, ind) => (
          <div
            style={
              ind === index
                ? {
                    backgroundColor: '#F0FAF5',
                    width: '300px',
                    padding: '1rem',
                    textAlign: 'left',
                  }
                : {}
            }
            // className={ind === index ? 'timer' : null}
          >
            <Box fontSize="18px" fontWeight="bold">
              {/* <GiStopwatch fill='skyblue'/> */}
              {/* <RiMoneyDollarBoxFill color='green'/> */}
              {elem.title}
            </Box>
            <Box>{ind === index ? elem.desc : null}</Box>
          </div>
        ))}
      </Box>
      <Image src={imgUrl} w="60%" />
    </Box>
  );
}
