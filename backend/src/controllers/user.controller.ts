import { Request, Response } from "express";
import generateToken from "../helpers/jwt";
import User from "../models/user";

export class UserController {
  async register(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      res.status(400);
      throw new Error("Please Enter All Fields");
    }

    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      throw new Error("E-mail already in use");
    }

    const user = await User.create({ email, name, password });

    if (user) {
      return res.status(201).json({ user, token: generateToken(user._id) });
    } else {
      return res.status(400).json({ message: "Failed to Create User" });
    }
  }

  // async login(req: Request, res: Response): Promise<Response> {
  //   const { email, password } = req.body;

  //   const user = await User.findOne({ email }).select("+password").exec();

  //   if (user && (await User.matchPassword(password))) {
  //     res.json({
  //       user,
  //     });
  //   }
  // }
  async allUsers(req: Request, res: Response) {
    const keyword = req.query.search
      ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ]
      }
    : {};
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  }
}
