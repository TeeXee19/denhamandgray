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

    private getAuthToken(): string | null {
        return localStorage.getItem('creditials'); // Retrieve token from local storage
      }
    
    async summary(): Promise<UserResponse> {
        try {
            const response = await this.client.get('/summary') 
            return response.data   
        } catch (error) {
            throw error 
        }
    }
    
    async updateSummary(input: {
        financialInstitutions: string;
        beneficiaries: string;
        amountApproved: string;
        amountDisbursed: string;
        businessesFinanced: string;
        greenTransactions: string;
        femaleBeneficiaries: string;
        bankBranchesTransitioned: string;
        carbonEmissionsSaved: string;
      }): Promise<UserResponse> {
        const token = this.getAuthToken();
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        try {
          const response = await this.client.patch('/summary', input, {headers});
          return response.data as UserResponse;
        } catch (error) {
          console.error('Error updating summary:', error);
          throw new Error('Failed to update summary.'); // Customize the error message as needed
        }
      }


}