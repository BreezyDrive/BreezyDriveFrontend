import { CarBrand } from './carBrand';

export interface CarModel {
    id: string;
    carBrand: CarBrand;
    name: string;
    releaseYear: number;
} 