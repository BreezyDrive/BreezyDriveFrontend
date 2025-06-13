import axiosClient from "../utils/axiosClient";
import { User } from "../models/user";

const USER_API_URL = "/users-api/api/Users";

export const getUserByGuid = async (id: string): Promise<User> => {
  const response = await axiosClient.get<User>(
    `${USER_API_URL}/GetUserById/${id}`
  );
  return response.data;
};
