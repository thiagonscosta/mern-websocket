import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUserDocument } from '../models/interfaces/user.interface';
import User from '../models/user';

interface RequestWithUser extends Request {
    user: IUserDocument;
}

async function authMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
    // let token;
    // const authorization = req.headers.toString();
    const authorization = req.headers.authorization;

    if (
        authorization &&
        authorization.startsWith("Bearer")
    ) {
        try {
            const token = authorization.split(" ")[1];
            const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as any;

            const user = await User.findById(decoded.id).select("-password");

            req.user = user;
        }
    }
}