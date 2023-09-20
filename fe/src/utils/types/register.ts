export interface Register {
    firstName: string;
    lastName: string;
    phone: string;
    username: string;
    password: string;
    avatar?: File | null;
}