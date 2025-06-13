import { CarModel } from './carModel.ts';

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