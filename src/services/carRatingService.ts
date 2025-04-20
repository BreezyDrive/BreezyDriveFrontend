import axiosClient from "../utils/axiosClient";
import { getUserByGuid } from "./userServices";



export interface CarRating {
    id: string;
    userId: string;
    carId: string;
    star: number;
    comment: string;
    date: string;
    user?: {
        name: string;
        avatar: string;
      };
}

const CAR_Rating_API_URL = "/cars-api/api/CarRating";


export const GetAllCarRatingByCarId = async (carId : string): Promise<CarRating[]> => {
    const response = await axiosClient.get<CarRating[]>(
        `${CAR_Rating_API_URL}/GetAllCarRatingByCarId/${carId}`
    );
    return response.data;
}


export const GetCarRatingWithUserByCarId = async (carId : string): Promise<CarRating[]> => {
    const ratingsData = await GetAllCarRatingByCarId(carId);

    const ratingsWithUser = await Promise.all(
        (await ratingsData).map(async (rating) => {
            const user = await getUserByGuid(rating.userId);
            return {
                ...rating,
                user: {
                    name: user.fullName,
                    avatar: user.avatar,
                },
            }
        }
    ));


    return ratingsWithUser;
}


