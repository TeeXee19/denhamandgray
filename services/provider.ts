import axios from "axios"
import { type LoginServiceInterface, LoginService } from "./LoginService";
import { type UserServiceInterface, UserService } from "./UserService";

export interface ServiceProviderInterface {
    login: LoginServiceInterface;
    user: UserServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const client = axios.create({
        baseURL: ''
    })
    return {
        login: new LoginService(client),
        user: new UserService(client),
    }
}