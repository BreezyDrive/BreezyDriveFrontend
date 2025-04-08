import axiosClient from "../utils/axiosClient";

const CAR_API_URL = "/cars-api/api/Car";


export interface CarModel {
  id: string;
  brandId: string;
  name: string;
  releaseYear: number;
}


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
}

