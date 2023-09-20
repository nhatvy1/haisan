import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authReducer from './slices/authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userReducer from './slices/userSlice'
import categoryReducer from './slices/categorySlice'
import productReducer from './slices/product.slice'
import cartReducer from './slices/cartSlice'
import productBestSellReducer from './slices/product.best.selling'
import productDetailReducer from './slices/product.detail'

const authConfig = {
    key: 'auth',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(authConfig, rootReducer)

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        user: userReducer,
        category: categoryReducer,
        product: productReducer,
        productBestSell: productBestSellReducer,
        productDetail: productDetailReducer,
        cart: cartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>