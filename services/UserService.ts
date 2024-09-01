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

export interface UserServiceInterface {
    user(input: CreateUserInput): Promise<UserResponse>
}

export class UserService implements UserServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async user(input: CreateUserInput): Promise<UserResponse> {
        try {
            const response = await this.client.post('/contact/save', input) 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
}