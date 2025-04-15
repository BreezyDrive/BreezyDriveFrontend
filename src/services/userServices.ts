import axiosClient from "../utils/axiosClient";

const USER_API_URL = "/users-api/api/Users";

export interface User {
  id: string;
  roleId: string;
  avatar: string;
  fullName: string;
  drivingLicense: string | null;
  phone: string;
  isPhoneVerification: boolean;
  email: string;
  point: number;
  totalReservation: number;
  createAt: string; // hoặc Date nếu bạn parse về Date object
}



export const getUserByGuid = async (id: string): Promise<User> => {
  const response = await axiosClient.get<User>(
    `${USER_API_URL}/GetUserById/${id}`
  );
  return response.data;
};
