export interface Product {
    id?: number | null;
    name?: string;
    price?: number;
    discount?: number;
    unit?: string;
    description?: string;
    images?: string | null;
    quantity: number;
    giftContent?: string;
    categoryId?: string;
}