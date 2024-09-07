import type { AxiosInstance } from "axios";

export interface CreateUserInput {
    name: string;
    email: string;
    phone: string;
    date: string;
}
interface UserResponse {
    body: string;
    message: string;
    code: number;
}

export interface BaseServiceInterface {
    summary(): Promise<UserResponse>
}

export class BaseService implements BaseServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async summary(): Promise<UserResponse> {
        try {
            const response = await this.client.get('/summary') 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
}