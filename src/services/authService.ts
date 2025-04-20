import axiosClient from "../utils/axiosClient";

const AUTH_API_URL = '/authentication-api/api/Authentication';

export interface LoginRequest {
    phone: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  }

export const postLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
{
      const response = await axiosClient.post<LoginResponse>(`${AUTH_API_URL}/Login`, credentials);
      return response.data;
    

  };

}

export const postLogout = async (): Promise<void> => {
  await axiosClient.post(`${AUTH_API_URL}/logout`);
} ;
