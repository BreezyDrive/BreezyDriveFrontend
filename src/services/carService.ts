import axiosClient from "../utils/axiosClient";
import { CarModel } from "./carModelService";

const CAR_API_URL = "/cars-api/api/Car";


export interface Car {
  id: string;
  userId: string;
  carModel: CarModel;
  carAvatar: string;
  frontImage: string;
  backImage: string;
  leftImage: string;
  rightImage: string;
  transmissionType: string;
  fuelType: string;
  fuelConsumption: number;
  seat: number;
  location: string;
  description: string;
  dayOfRegistration: Date;
  isDropOf: boolean;
  feePerKm: number;
  availableZone: number;
  numberOfReservation: number;
  pricePerDay: number;
}


export const getCars = async (): Promise<Car[]> => {
  const response = await axiosClient.get<Car[]>(`${CAR_API_URL}/GetAllCars`);
  return response.data;
};

export const getCarByGuid = async (id: string): Promise<Car> => {
  const response = await axiosClient.get<Car>(`${CAR_API_URL}/GetCarByGuid/${id}`);
  return response.data;
};

