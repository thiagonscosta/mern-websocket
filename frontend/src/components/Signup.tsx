import { Button, FormControl, FormLabel, Input, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Signup: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [pic, setPic] = useState('');

    const handleClick = () => setShowPassword(!showPassword);

    return <VStack spacing="5px">
        <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input 
                isRequired
                placeholder='Enter Your Name'
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input 
                isRequired
                placeholder='Enter Your Email'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input 
                type={showPassword ? "text" : "password"}
                placeholder='Enter Your Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {showPassword ? "Hide" : "Show" }
                </Button>
            </InputRightElement>
        </FormControl>
        <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <Input 
                placeholder='Enter Your Email'
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </FormControl>
    </VStack>
}

export default Signup;