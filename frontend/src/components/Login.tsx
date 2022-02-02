import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () => {};

    return <VStack spacing="5px">
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter Your Email'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
         <FormControl>
            <FormLabel>Password</FormLabel>
            <Input 
                placeholder='Enter Your Email'
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormControl>
        <Button
            variant="solid"
            colorScheme="blue"
            width="100%"
            color="white"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Login
        </Button>
        <Button
            variant="solid"
            colorScheme="red"
            width="100%"
            color="white"
            style={{ marginTop: 15 }}
            onClick={() => {
                setEmail("guest@example.com");
                setEmail("123456");
            }}
        >
            Get Guest User Credentials
        </Button>
    </VStack>
}

export default Login;