import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';

const HomePage: React.FC = () => {
    return (<Container maxW='xl' centerContent>
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
        <Box></Box>
    </Container>)
}

export default HomePage;