//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin
import { model, Schema, Model, Document } from 'mongoose';

interface IChannel extends Document {
    channelName: string;
    isGroupChannel: boolean;
    latestMessage: 
}