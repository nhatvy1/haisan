export interface CartItem {
    id: number | null;
    name: string;
    price: number;
    discount: number;
    unit: string;
    quantity: number;
}