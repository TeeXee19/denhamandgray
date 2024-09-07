import axios from "axios"
import { type LoginServiceInterface, LoginService } from "./LoginService";
import { type BaseServiceInterface, BaseService } from "./BaseService";

export interface ServiceProviderInterface {
    login: LoginServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const client = axios.create({
        baseURL: 'https://denhamandgray-backend.onrender.com/'
    })
    return {
        login: new LoginService(client),
        base: new BaseService(client),
    }
}