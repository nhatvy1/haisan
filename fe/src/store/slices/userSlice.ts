import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios/axios.config'
import { User } from "../../utils/types/user"

const initialState: User = {
    id: null,
    firstName: '',
    lastName: '',
    phone: '',
    avatar: ''
}

export const getCurrent = createAsyncThunk(
    'user/get',
    async(_, thunkAPI)=> {
        const response = await axios.get('api/v1/user/get-current-user', {
            signal: thunkAPI.signal
        }) 
        return response
    }
)

const getCurrentSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser(state):User {
            return {
                ...state, 
                id:null,
                firstName:'',
                lastName:'',
                phone: '',
                avatar: ''
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCurrent.fulfilled, (state, action: any)=> {
                state.id = action.payload.id
                state.firstName = action.payload.firstName
                state.lastName = action.payload.lastName
                state.phone = action.payload.phone
                state.avatar = action.payload.avatar
            })
    }
})

export const { logoutUser } = getCurrentSlice.actions
const userReducer = getCurrentSlice.reducer
export default userReducer