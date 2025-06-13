import axiosClient from "../utils/axiosClient";
import { CarModel } from "../models/carModel";

const CAR_Model_API_URL = "/cars-api/api/CarModel";

export const getCarByGuid = async (id: string): Promise<CarModel> => {
  const response = await axiosClient.get<CarModel>(
    `${CAR_Model_API_URL}/GetCarModelByGuid/${id}`
  );
  return response.data;
};
