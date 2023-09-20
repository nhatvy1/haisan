export interface Auth {
    isLoggedIn: boolean;
    msg?: string;
    token?: string | null;
    loginStatus?: string;
    registerStatus?: string;
}