import { Button, FormControl, FormLabel, Input, toast, VStack, useToast } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please Fill All The Fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                }
            };

            const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
            );

            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats");
        } catch (error) {
            const err = error as AxiosError;
            toast({
                title: "Error Occured!",
                description: err.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };

    return <VStack spacing="5px">
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
         <FormControl>
            <FormLabel>Password</FormLabel>
            <Input 
                type={show ? "text" : "password"}
                value={password}
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
            isLoading={loading}
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