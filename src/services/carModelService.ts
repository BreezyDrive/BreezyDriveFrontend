import axiosClient from "../utils/axiosClient";
const CAR_Model_API_URL = "/cars-api/api/CarModel";

export interface CarModel {
  id: string;
  brandId: string;
  name: string;
  releaseYear: number;
}

export const getCarByGuid = async (id: string): Promise<CarModel> => {
  const response = await axiosClient.get<CarModel>(
    `${CAR_Model_API_URL}/GetCarModelByGuid/${id}`
  );
  return response.data;
};
