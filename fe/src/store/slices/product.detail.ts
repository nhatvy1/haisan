import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../utils/types/product';
import axios from '../../axios/axios.client';
import { endpoint } from '../../utils/constant/routes';
import { ProductProp } from '../../components/Product/ProductCard';

interface ProductState {
    productDetail: ProductProp;
}

const initialState: ProductState = {
    productDetail: {},
};

export const getProductDetail = createAsyncThunk(
    'product/getAll',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${endpoint.get_product_detail}?id=${id}`);
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
            .addCase(getProductDetail.pending, (state) => {
                return { ...state };
            })
            .addCase(
                getProductDetail.fulfilled,
                (state, action: PayloadAction<any>) => {
                    return { ...state, productDetail: action.payload.response };
                },
            )
            .addCase(getProductDetail.rejected, (state) => {
                return { ...state };
            });
    },
});

const productDetailReducer = productSlice.reducer;
export default productDetailReducer;
