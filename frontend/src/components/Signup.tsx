import { Button, FormControl, FormLabel, Input, InputRightElement, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

const Signup: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [pic, setPic] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const postDetails = (pics: any) => {
        setLoading(true);
        if (pic === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat_app");
            data.append("cloud_name", "daoswi9iv");
            axios.post(`${process.env.CLOUDINARY_URL}`, { data })
                .then((res) => res.data)
                .then((data) => { 
                    setPic(data.url.toString()); 
                    setLoading(false); 
                }).catch((err) => { console.log(err); setLoading(false); })
        } else {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            return;
        }
    };

    const submitHandler = () => {};

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
        <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e) => postDetails(e.target)}
            >
            </Input>
        </FormControl>
        <Button
            colorScheme="blue"
            width="100%"
            color="white"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            isLoading={loading}
        >
            Sign Up
        </Button>
    </VStack>
}

export default Signup;