export const path = {
    // HOME: '/*',
    HOME: '/',
    HOME__PAGE: ':page',
    LOGIN: 'login',
    REGISTER: 'register',
    CART: 'cart',

    USER: 'user',
    EDIT: 'edit-profile',
    PAYMENT: 'payment',
    ADDRESS: 'address',
    ORDER: 'order',

    PRODUCT_DETAIL: 'product-detail',
    PRODUCT_BY_CATEGORY: 'product',


    ADMIN: 'admin',
    ADD_PRODUCT: 'add-product',
}

export const endpoint = {
    get_category_all: 'api/v1/categories/get-all',

    get_product_all: 'api/v1/products/get-all',
    get_product_by_category: 'api/v1/products/get',
    get_product_best_selling: 'api/v1/products/get-best-selling',
    get_product_detail: 'api/v1/products/get-detail',
    
    login: 'api/v1/auth/login',
    register: 'api/v1/auth/register',
}