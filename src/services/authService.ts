import axiosClient from "../utils/axiosClient";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../models/auth";

const AUTH_API_URL = '/authentication-api/api/Authentication';

export const postLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosClient.post<LoginResponse>(`${AUTH_API_URL}/Login`, credentials);
    return response.data;
};

export const postRegister = async (userData: RegisterRequest): Promise<RegisterResponse> => {
    const response = await axiosClient.post<RegisterResponse>(`${AUTH_API_URL}/Register`, userData);
    return response.data;
};

export const postLogout = async (): Promise<void> => {
    await axiosClient.post(`${AUTH_API_URL}/logout`);
};
