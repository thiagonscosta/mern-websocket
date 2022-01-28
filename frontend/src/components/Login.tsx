import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    </VStack>
}

export default Login;