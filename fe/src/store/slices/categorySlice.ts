import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../utils/types/category";
import axios from "../../axios/axios.client";
import { endpoint } from "../../utils/constant/routes";

interface CategoryState {
    categoriesList: Category[]
}
const initialState: CategoryState = {
    categoriesList: []
}

export const getCategoryAll = createAsyncThunk(
    'category/getAll',
    async(_, { rejectWithValue })=> {
        try {
            const response = await axios.get(endpoint.get_category_all)
            return response
        } catch(e) {
            console.log(e)
            return rejectWithValue(e)
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCategoryAll.pending, (state)=> {
                return {...state}
            })   
            .addCase(getCategoryAll.fulfilled, (state, action: PayloadAction<any>)=> {
                return { ...state, categoriesList: action.payload.response}
            })
            .addCase(getCategoryAll.rejected, (state)=> {
                return { ...state }
            })
    }
})

const categoryReducer = categorySlice.reducer
export default categoryReducer