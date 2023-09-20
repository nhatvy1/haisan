import { GrAdd, GrSubtract } from 'react-icons/gr';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {
    addToCart,
    decreaseCart,
    removeFromCart,
} from '../../store/slices/cartSlice';
import { formatPrice } from '../../utils/format/format.price';

interface CartItemProps {
    id?: number;
    name?: string;
    price?: number;
    discount?: number;
    unit?: string;
    quantity?: number;
}

const CartItem = (props: CartItemProps) => {
    const dispatch = useDispatch();

    const handleDecreaseCart = (product: CartItemProps) => {
        dispatch(decreaseCart(product));
        console.log('Check decrease cart: ', product);
    };

    const handleAddToCart = (product: CartItemProps) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (product: CartItemProps) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="flex justify-between border-t border-b py-2">
            <div>
                <div className="flex">
                    <div className="w-[100px] h-[100px] border">
                        <img
                            src="https://res.cloudinary.com/metavere/image/upload/v1692979847/tuoi_owzole.jpg"
                            alt="Loi"
                        />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span>{props.name}</span>
                            <span> / {props.unit}</span>
                        </p>
                        <p>{formatPrice(props.price)}</p>
                        <ul className="flex items-center">
                            <li>
                                <button
                                    className="flex justify-center items-center p-2 w-[30px] h-[30px] border rounded-full bg-gray-200"
                                    onClick={() => handleDecreaseCart(props)}
                                >
                                    <GrSubtract />
                                </button>
                            </li>
                            <li>
                                <span className="p-2">{props.quantity}</span>
                            </li>
                            <li>
                                <button
                                    className="flex justify-center items-center p-2 w-[30px] h-[30px] border rounded-full bg-gray-200"
                                    onClick={() => handleAddToCart(props)}
                                >
                                    <GrAdd />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-end mb-4">
                    <button onClick={() => handleRemoveFromCart(props)}>
                        <RiCloseCircleLine size={24} />
                    </button>
                </div>
                <p>{formatPrice((props.price || 0) * (props.quantity || 0))}</p>
            </div>
        </div>
    );
};

export default CartItem;
