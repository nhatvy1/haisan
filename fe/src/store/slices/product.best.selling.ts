import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../utils/types/product';
import axios from '../../axios/axios.client';
import { endpoint } from '../../utils/constant/routes';

interface ProducState {
    productId: number;
    TotalQuantity: number;
    Product: Product;
}

interface ProductList {
    productsList: ProducState[];
}

const initialState: ProductList = {
    productsList: [],
};

export const getProductBestSelling = createAsyncThunk(
    'product/getProductBestSelling',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(endpoint.get_product_best_selling);
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProductBestSelling.pending, (state) => {
                return { ...state };
            })
            .addCase(
                getProductBestSelling.fulfilled,
                (state, action: PayloadAction<any>) => {
                    return { ...state, productsList: action.payload.response };
                },
            )
            .addCase(getProductBestSelling.rejected, (state) => {
                return { ...state };
            });
    },
});

const productBestSellReducer = productSlice.reducer;
export default productBestSellReducer;