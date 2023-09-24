
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import CartItem from '../../../components/Cart/CartItem'
import { TbArrowBackUp } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
import { formatPrice } from '../../../utils/format/format.price'
import axios from '../../../axios/axios.config'
import { toast } from 'react-toastify';
import { clearCartAfterOrder } from '../../../store/slices/cartSlice'


export default function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartList = useSelector((state: RootState)=> state.cart.cartList)
    const cartTotalPrice = useSelector((state: RootState)=> state.cart.cartToTalPrice)
    const user = useSelector((state: RootState)=> state.user)

    const auth = useSelector((state: RootState)=> state.auth.auth)

    const handleOrder = async ()=> {
        if (auth.isLoggedIn) {
            if (cartList.length > 0) {
                const data = {cartList, user}
                try {
                    const response: any = await axios.post(`api/v1/order/buy`, data)
                    if (response && response.err === 0) {
                        dispatch(clearCartAfterOrder())
                        toast.info(response.msg)
                        navigate('/')
                    } 
                } catch(error: any){
                    // console.log(error.response.data.msg)
                    toast.warn(error.response.data.msg)
                }
            } else {
                console.log('Chưa có sản phẩm nào trong giỏ hàng.')
            }
        } else {
            navigate('/login')
            toast.info('Đăng nhập để mua hàng.')
        }
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-xl uppercase font-medium">Giỏ hàng</h2>
            <div className='flex justify-between'>
                <div className='basis-1/2'>
                    {cartList?.length > 0 && cartList.map(cart=> (
                        <CartItem 
                            key={cart.id}
                            id={cart.id || 0}
                            name={cart.name}
                            price={cart.price}
                            discount={cart.discount}
                            unit={cart.unit}
                            quantity={cart.quantity}
                            images={cart.images}
                            />
                    ))}
                </div>
                <div className='border basis-1/3 p-3'>
                    <h2 className='text-xl font-medium'>Chọn thời gian nhận hàng</h2>
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-medium'>Ghi chú</h4>
                        <form className=''>
                            <textarea 
                                className='w-full bg-gray-200 rounded-md p-2 text-sm outline-none' 
                                placeholder='Ghi chú cho đơn hàng của bạn' 
                                itemType='text' 
                            />
                        </form>
                        <hr />
                        <div className='flex justify-between'>
                            <span>Tổng tiền:</span>
                            <span>{formatPrice(cartTotalPrice)}</span>
                        </div>
                        <hr />
                        <button 
                            className='bg-[#ff7200] p-2 text-white text-sm rounded-md'
                            onClick={()=> handleOrder()}
                        >
                            Tiến hành đặt hàng
                        </button>
                        <Link to={'/'} className='flex items-center justify-center text-center text-blue-400 text-sm'>
                            <TbArrowBackUp size={20}/>
                            Tiếp tục mua hàng
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}