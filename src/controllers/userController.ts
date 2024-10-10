import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import userService from "../services/userService"


export const createUser = async (req: Request, res: Response) => {
    try {
        const resolt = await userService.createUser(req.body)
        res.status(201).json({
            msg: "user created",
            resolt
        })   
    } catch (err) {
        res.status(400).json(err)
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const resolt = await userService.getUsers
        res.status(200).json(resolt)   
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const resolt = await userService.getUserById
        res.status(200).json(resolt)   
    } catch (err) {
        res.status(400).json(err)
    }
};

// Optionally, add DELETE and EDIT functions
