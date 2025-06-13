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