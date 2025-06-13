import axiosClient from "../utils/axiosClient";
import { CarBrand } from "../models/carBrand";

const CAR_Brand_API_URL = "/cars-api/api/CarBrand";

export const getCarBrands = async (): Promise<CarBrand[]> => {
  const response = await axiosClient.get<CarBrand[]>(`${CAR_Brand_API_URL}/GetAllCarBrands`);
  return response.data;
};


