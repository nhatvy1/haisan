import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../utils/types/product';
import axios from '../../axios/axios.client';
import { endpoint } from '../../utils/constant/routes';

interface ProductState {
    productsList: Product[];
    totalPage: number;
    totalRows: number;
}

const initialState: ProductState = {
    productsList: [],
    totalPage: 0,
    totalRows: 0,
};

export const getProductsAll = createAsyncThunk(
    'product/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(endpoint.get_product_all);
            console.log('check response: ', response);
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const getProductByCategory = createAsyncThunk(
    'product/getProductByCategory',
    async (
        {
            categoryId,
            page,
            limit,
        }: { categoryId: number; page: number; limit: number },
        { rejectWithValue },
    ) => {
        try {
            const response = await axios.get(
                `${endpoint.get_product_by_category}?categoryId=${categoryId}&page=${page}&limit=${limit}`,
            );
            // console.log('Check response product by category: ', response)
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
            .addCase(getProductsAll.pending, (state) => {
                return { ...state };
            })
            .addCase(
                getProductsAll.fulfilled,
                (state, action: PayloadAction<any>) => {
                    return { ...state, productsList: action.payload.response };
                },
            )
            .addCase(getProductsAll.rejected, (state) => {
                return { ...state };
            })
            .addCase(getProductByCategory.pending, (state) => {
                return { ...state };
            })
            .addCase(
                getProductByCategory.fulfilled,
                (state, action: PayloadAction<any>) => {
                    // console.log('Check state: ', action.payload.data.products)
                    return {
                        ...state,
                        productsList: action.payload.data.products,
                        totalPage: action.payload.data.totalPage,
                        totalRows: action.payload.data.totalRows,
                    };
                },
            )
            .addCase(getProductByCategory.rejected, (state) => {
                return { ...state };
            });
    },
});

const productReducer = productSlice.reducer;
export default productReducer;
