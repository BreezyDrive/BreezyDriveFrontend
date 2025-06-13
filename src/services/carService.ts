import axiosClient from "../utils/axiosClient";
import { Car } from "../models/car";

const CAR_API_URL = "/cars-api/api/Car";

export const getCars = async (): Promise<Car[]> => {
  const response = await axiosClient.get<Car[]>(`${CAR_API_URL}/GetAllCars`);
  return response.data;
};

export const getCarByGuid = async (id: string): Promise<Car> => {
  const response = await axiosClient.get<Car>(`${CAR_API_URL}/GetCarByGuid/${id}`);
  return response.data;
};

