import { CiBank, CiShoppingCart } from 'react-icons/ci'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Link, Outlet } from "react-router-dom"
import { path } from "../../utils/constant/routes";

const Profile = ()=> {
    return (
        <div className="container mx-auto mt-5">
            <div className="flex gap-6">
                <div className="flex flex-col px-3 w-[282px]">
                    <ul className="flex flex-col gap-6">
                        <Link to=''>
                            <li className="flex items-center gap-2">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                                    <img src="images/avatar.jpg" alt="Loi avatar" className="w-full h-full"/>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">nhatvyhuynh304</p>
                                    <p className="text-center text-gray-400">Sửa hồ sơ</p>
                                </div>
                            </li>
                        </Link>
                        <Link to={path.PAYMENT}> 
                            <li className='flex items-center gap-2'>
                                <CiBank size={24}/>
                                Ngân hàng
                            </li>
                        </Link>
                        <Link to={path.ADDRESS}> 
                            <li className='flex items-center gap-2'>
                                <HiOutlineLocationMarker size={24}/>
                                Địa chỉ
                            </li>
                        </Link>
                        <Link to={path.ORDER}> 
                            <li className='flex items-center gap-2'>
                                <CiShoppingCart size={24}/>
                                Đơn mua
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="border basis-full shadow-md rounded-xl p-5">
                    <Outlet />
                </div>  
            </div>
        </div>
    )
}

export default Profile