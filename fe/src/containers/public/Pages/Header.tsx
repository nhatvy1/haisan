import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { User } from '../../../components';
import { getTotals } from '../../../store/slices/cartSlice';

export default function Header() {
    const dispatch = useDispatch()
    const [menu, setMenu] = useState(false);
    const { isLoggedIn } = useSelector((state: RootState)=> state.auth.auth)

    const cart = useSelector((state: RootState)=>  state.cart)
    const cartTotalQuantity = useSelector((state: RootState)=> state.cart.cartTotalQuantity)

    const handleMenu = () => {
        setMenu(true)
    }
    
    useEffect(()=> {
        dispatch(getTotals())
    }, [cart, dispatch])
    return (
        <div className="bg-header max-md:p-[5px] max-md:relative">
            <div className="container mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={() => handleMenu()}
                    >
                        <img
                            alt="Bar menu"
                            src="/images/bar-menu.svg"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                    </div>
                    <div className="">
                        <Link to='/'>
                            <img
                                alt="Đảo hải sản"
                                src="/images/logo-header.png"
                                height={56}
                                width={282}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className={`flex max-lg:flex-col max-lg:gap-2 max-md:fixed 
                            max-md:bg-white 
                            ${menu ? 'left-0' : '-left-full'} 
                            top-0 max-md:h-[100vh] 
                            max-md:whitespace-nowrap 
                            max-md:shadow-2xl gap-8 items-center
                            `}
                        >
                            <div className="box flex">
                                <div className="pt-1">
                                    <img
                                        alt=""
                                        src="/images/call.svg"
                                        height={24}
                                        width={24}
                                    />
                                </div>
                                <div className="">
                                    <p className="text-fs28 font-semibold leading-9 not-italic text-yellow">
                                        1900&nbsp;0098
                                    </p>
                                    <p className="text-white text-sm font-normal not-italic leading-22">
                                        {'(8h-21h từ T2-Chủ nhật)'}
                                    </p>
                                </div>
                            </div>
                            <div className="box flex items-center gap-2">
                                <img
                                    alt=""
                                    src="/images/bars.svg"
                                    height={16}
                                    width={22}
                                />
                                <p className="text-fs28 font-semibold leading-9 not-italic text-yellow">
                                    Giao hàng 2H
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center max-md:hidden">
                            <div className="">
                                <img
                                    alt=""
                                    src="/images/user.svg"
                                    height={24}
                                    width={24}
                                />
                            </div>
                            {isLoggedIn ?
                                <User />
                                :
                                <Link to={'/login'}>
                                    <div className="">
                                        <p className="text-white text-sm font-semibold not-italic leading-22">
                                            TÀI KHOẢN CỦA TÔI
                                        </p>
                                        <p className="text-white text-sm12 font-normal leading-5">
                                            {' '}
                                            Đăng nhập / Đăng kí
                                        </p>
                                    </div>
                                </Link>
                            }
                        </div>
                        <Link to={'/cart'}>
                            <div className="box flex flex-col items-center justify-center relative">
                                <div className=" w-fit">
                                    <img
                                        alt=""
                                        src="/images/bag.svg"
                                        height={24}
                                        width={24}
                                    />
                                    <div className="absolute flex justify-center items-center top-0 right-[5px] w-[18px] rounded-full px-1 py-[2px] text-center text-[10px] font-medium not-italic text-white bg-[#D72C0D]">
                                        {cartTotalQuantity}
                                    </div>
                                </div>
                                <p className="text-white text-sm12 font-normal leading-5">
                                    {' '}
                                    Giỏ hàng
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
