import { Routes, Route } from 'react-router-dom';
import { path } from './utils/constant/routes';
import {
    Cart,
    Home,
    HomePage,
    Login,
    NotFound,
    ProductByCategory,
    Register,
} from './containers/public';
import { RootState, useAppDispatch } from './store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrent } from './store/slices/userSlice';
import {
    EditProfile,
    ProductDetail,
    Profile,
    UserAddress,
    UserOrder,
    UserPayment,
} from './components/index';
import AddProduct from './containers/system/Product/AddProduct';

export default function App() {
    const dispatch = useAppDispatch();
    const { isLoggedIn } = useSelector((state: RootState) => state.auth.auth);

    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(getCurrent());
        }, 1000);
    }, [isLoggedIn]);

    return (
        <Routes>
            <Route path={path.HOME} element={<Home />}>
                {/* <Route path="*" element={<HomePage />} /> */}
                <Route index element={<HomePage />} />
                
                <Route path={`${path.PRODUCT_BY_CATEGORY}/:id`} element={<ProductByCategory />} />

                <Route path={`${path.PRODUCT_DETAIL}/:id`} element={<ProductDetail />}/>

                <Route path={path.USER} element={<Profile />}>
                    <Route index element={<EditProfile />} />
                    <Route path={path.PAYMENT} element={<UserPayment />} />
                    <Route path={path.ADDRESS} element={<UserAddress />} />
                    <Route path={path.ORDER} element={<UserOrder />} />
                </Route>


                <Route path={path.LOGIN} element={<Login />} />
                <Route path={path.REGISTER} element={<Register />} />
                <Route path={path.CART} element={<Cart />} />
            </Route>

            <Route path={path.ADD_PRODUCT} element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
