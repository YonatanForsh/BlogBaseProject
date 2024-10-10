import UserModel, { IUser } from "../models/userModel" 
import { userDTO } from "../dto/userDto"
import { log } from "console"



const createUser = async (user: IUser) => {
    try {
        const newUser = new UserModel(user)
        await newUser.save()
        return newUser
    
    } catch (err) {
        throw new Error("invalid user")
    }
}


const getUserById = async (user: typeof UserModel) => {
    
}


const getUsers = async (user: typeof UserModel) => {

}


const updateUserDetails = async (user: typeof UserModel) => {

}



export default {
    createUser,
    getUserById,
    getUsers,
    updateUserDetails
}
