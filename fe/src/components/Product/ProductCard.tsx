import { useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/format/format.price';
import { addToCart } from '../../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import { path } from '../../utils/constant/routes';

export interface ProductProp {
    id?: number | null;
    name?: string;
    price?: number;
    discount?: number;
    unit?: string;
    description?: string;
    images?: string;
    status?: string;
    quantity?: number;
    giftContent?: string;
}

const ProductCard = (props: ProductProp) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product: ProductProp) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="basis-23 flex flex-col gap-3 shadow-md border rounded-xl p-2">
            <Link to={`${path.PRODUCT_DETAIL}/${props.id}`}>

                <div className="w-full relative">
                    <div className="absolute">
                        <img src="/images/frame.png" alt="Loi" className="w-full" />
                    </div>
                    <div className="">
                        <img src={props.images} alt="Loi" className="w-full" />
                        {/* <img src="/images/not-img.jpg" alt="Loi" className="w-full"/> */}
                    </div>
                </div>
                <h3>{props.name}</h3>
                <p>
                    <span>{formatPrice(props.discount)}</span>
                    <span>/ {props.unit}</span>
                </p>
                <p className="line-through">{formatPrice(props.price)}</p>
            </Link>
            <button
                className="bg-orange-500 p-1 rounded-md text-white"
                onClick={() => handleAddToCart(props)}
            >
                Thêm giỏ hàng
            </button>
        </div>
    );
};

export default ProductCard;
