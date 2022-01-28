import React from 'react';
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Signup from '../components/Signup';
import Login from '../components/Login';

const HomePage: React.FC = () => {
    return <Container maxW='xl' centerContent>
        <Box
            d='flex'
            justifyContent='center'
            p={3}
            bg={'white'}
            w='100%'
            m='4px 0 15px 0'
            borderRadius='lg'
            borderWidth='1px'
        >
            <Text fontSize='4xl' fontFamily="Work sans">Talk-A-Tive</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded">
                <TabList mb="1rem">
                    <Tab width="50%">Login</Tab>
                    <Tab width="50%">Sign Up</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Signup />
                    </TabPanel>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Box>
    </Container>
}

export default HomePage;