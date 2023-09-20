import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../utils/types/cartItem';
import { toast } from 'react-toastify';
import { ProductProp } from '../../components/Product/ProductCard';

interface CartState {
    cartList: CartItem[];
    cartTotalQuantity?: number;
    cartToTalPrice?: number;
}

const cartList: CartItem[] =
    JSON.parse(localStorage.getItem('cartItems') as string) ?? [];

const initialState: CartState = {
    cartList,
    cartTotalQuantity: 0,
    cartToTalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ProductProp>) {
            const existingIndex = state.cartList.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (existingIndex >= 0) {
                state.cartList[existingIndex] = {
                    ...state.cartList[existingIndex],
                    quantity: state.cartList[existingIndex].quantity + 1,
                };
                toast.info(`Thêm 1 ${action.payload.name} vào giỏ hàng`, {
                    position: 'bottom-left'
                });
            } else {
                let tempProductItem: CartItem = {
                    id: action.payload.id || null,
                    name: action.payload.name || '',
                    price: action.payload.price || 0,
                    discount: action.payload.discount || 0,
                    unit: action.payload.unit || '',
                    quantity: 1,
                };
                state.cartList.push(tempProductItem);
                toast.info(`Thêm 1 ${action.payload.name} vào giỏ hàng`, {
                    position: 'bottom-left'
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartList));
        },
        getTotals(state) {
            let { total, quantity } = state.cartList.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                },
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartToTalPrice = total;
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartList.findIndex(
                (item)=> item.id === action.payload.id
            )
            if(state.cartList[itemIndex].quantity > 1) {
                state.cartList[itemIndex].quantity -=1
                toast.info('Giảm số lượng', {
                    position: 'bottom-left'
                })
            } else if(state.cartList[itemIndex].quantity ===1) {
                const nextCartItems = state.cartList.filter(
                    (item)=> item.id !== action.payload.id
                )
                state.cartList = nextCartItems
                toast.error('Sản phâm được xóa khỏi giỏ hàng', {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartList))
        },
        removeFromCart(state, action) { 
            state.cartList.map(cartItem=> {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartList.filter(
                        (item)=> item.id !== cartItem.id
                    )
                    state.cartList = nextCartItems
                    toast.error('Sản phẩm được xóa khỏi giỏ hàng', {
                        position: 'bottom-left'
                    })
                    localStorage.setItem('cartItems', JSON.stringify(state.cartList))
                    return state
                }
            })
        },
        clearCart(state) {
            state.cartList = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartList))
            toast.error('Đã xóa tất cả sản phẩm khỏi giỏ hàng', {
                position: 'bottom-left'
            })
        },
        clearCartAfterOrder(state) {
            state.cartList = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartList))
        }
    },
});

export const { addToCart, getTotals, decreaseCart, removeFromCart, clearCart, clearCartAfterOrder} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
