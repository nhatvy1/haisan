import React from 'react'
import { BsFillTrashFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../store/store"
import { formatPrice } from '../../utils/format/format.price'

const CartHover = ()=> {
    const cartList = useSelector((state: RootState)=> state.cart.cartList)
    const cartTotalPrice = useSelector((state: RootState)=> state.cart.cartToTalPrice)

    return (
        <div className='hidden group-hover:block group-hover:absolute top-full w-[400px] right-0 shadow-lg bg-white z-30'>
            <div className="max-h-[300px] overflow-scroll overflow-x-hidden bg0red">
                {cartList?.length > 0 && cartList.map(item=> (
                    <div className='flex justify-between p-4 border-b' key={item.id}>
                        <div className='w-[100px]'>
                            <img src={item.images} alt={item.name}/>
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>X1</p>
                            <p><BsFillTrashFill /></p>
                        </div>
                    </div>
                ))}
            </div>
            {cartList?.length === 0 && (
                <h1 className="p-4">Chưa có sản phẩm</h1>
            )}

            <div className='p-4'>
                <div className='flex justify-between mb-2'>
                    <p>Tổng tiền</p>
                    <p className='text-[#2cbdeb] font-bold'>{formatPrice(cartTotalPrice)}</p>
                </div>
                <Link to={'/cart'}>
                    <button className='w-full border p-2 rounded-md bg-[#2cbdeb] text-white font-medium'>Xem giỏ hàng</button>
                </Link>
            </div>
        </div>
    )
}

export default React.memo(CartHover)