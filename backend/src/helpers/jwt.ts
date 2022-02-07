import jwt from 'jsonwebtoken'; 
import { Types } from 'mongoose';

const generateToken = (id: Types.ObjectId) => {
    return jwt.sign({ id }, `${process.env.JWT_SECRET}`, { expiresIn: "10d" })
}

export default generateToken;