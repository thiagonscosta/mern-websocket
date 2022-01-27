import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatPage: React.FC = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat')

        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, [])

    return <div>{chats.map(chat => <div key={chat}>{chat}</div>)}</div>
}

export default ChatPage;