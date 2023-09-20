import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios/axios.config';
import { Auth } from '../../utils/types/auth';
import { Login } from '../../utils/types/login';
import { endpoint } from '../../utils/constant/routes';
import { toast } from 'react-toastify';
import { Register } from '../../utils/types/register';

const initialState: Auth = {
    isLoggedIn: false,
    msg: '',
    token: null,
    loginStatus: '',
    registerStatus: '',
};
export const login = createAsyncThunk(
    'auth/login',
    async (login: Login, { rejectWithValue }) => {
        try {
            const response = await axios.post(endpoint.login, login);
            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue(e);
        }
    },
);

export const register = createAsyncThunk(
    'auth/register',
    async(register: Register, { rejectWithValue })=> {
        try {
            const response = await axios.post(endpoint.register, register)
            return response
        } catch(e) {
            console.log(e)
            return rejectWithValue(e)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state):Auth {
            return {
                ...state, 
                token: null,
                isLoggedIn: false,
                msg: 'null',
                loginStatus: '',
                registerStatus: ''
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                return { ...state, loginStatus: 'pending' };
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                if (action.payload.err === 0) {
                    toast.success(action.payload.msg)
                    return {
                        ...state,
                        isLoggedIn: true,
                        msg: action.payload.msg,
                        token: action.payload.token,
                        loginStatus: 'success',
                    };
                } else {
                    toast.error(action.payload.msg)
                    return {...state, loginStatus: 'rejected', msg: action.payload.msg}
                }
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                return {
                    ...state,
                    loginStatus: 'rejected',
                    msg: action.payload.msg,
                };
            })
            .addCase(register.pending, (state)=> {
                return {...state, registerStatus: 'pending'}
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<any>)=> {
                if (action.payload.err === 0) {
                    toast.success(action.payload.msg)
                    return {
                        ...state,
                        isLoggedIn: true,
                        msg: action.payload.msg,
                        token: action.payload.token,
                        registerStatus: 'success',
                    }
                } else {
                    toast.error(action.payload.msg)
                    return {...state, registerStatus: 'rejected', msg: action.payload.msg}
                }
            })
            .addCase(register.rejected, (state, action: PayloadAction<any>)=> {
                return {
                    ...state, 
                    registerStatus: 'rejected',
                    msg: action.payload.msg
                }
            })
        // .addDefaultCase((state, action)=> {
        //     console.log(`Action type: ${action.type}`, current(state))
        // })
    },
});

export const { logout } = authSlice.actions
const authReducer = authSlice.reducer;
export default authReducer;
