export interface User {
    id: string;
    roleId: string;
    avatar: string;
    fullName: string;
    drivingLicense: string | null;
    phone: string;
    isPhoneVerification: boolean;
    email: string;
    point: number;
    totalReservation: number;
    createAt: string;
} 