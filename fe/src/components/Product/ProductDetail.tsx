import { GrAdd, GrSubtract } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../styles/swiper.custom.css';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { getProductDetail } from '../../store/slices/product.detail';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format/format.price';
import { addToCart } from '../../store/slices/cartSlice';
import { ProductProp } from './ProductCard';

const ProductDetail = () => {
    const dispatchNoAsyncThunk = useDispatch()
    const dispatch = useAppDispatch()
    const { id } = useParams()

    const productDetail = useSelector((state: RootState)=> state.productDetail.productDetail)

    useEffect(() => {
        dispatch(
            getProductDetail(id!),
        );
    }, []);

    const handleAddToCart = (productDetail: ProductProp)=> {
        dispatchNoAsyncThunk(addToCart(productDetail))
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="flex gap-8">
                {/* Hình ảnh */}
                <div className="w-[400px]">
                    <div className="w-full h-[400px] border">
                        {productDetail?.images ?
                            (<img
                            src={productDetail.images}
                            alt={productDetail.name}
                            className="w-full h-full bg-no-repeat"
                            />)
                            : 
                            'Chua co anh'
                        }
                        {}
                    </div>
                    <div className="mt-5">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={4}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            speed={2000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="border h-[100px]">
                                    <img
                                        src="https://res.cloudinary.com/metavere/image/upload/v1692979958/trungca_wxkiyt.webp"
                                        alt="Loi anh"
                                        className="w-full h-full bg-cover bg-no-repeat"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="border h-[100px]">
                                    <img
                                        src="https://res.cloudinary.com/metavere/image/upload/v1692979847/tuoi_owzole.jpg"
                                        alt="Loi anh"
                                        className="w-full h-full bg-cover bg-no-repeat"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="border h-[100px]">
                                    <img
                                        src="https://res.cloudinary.com/metavere/image/upload/v1692979550/cachich_ugbylo.png"
                                        alt="Loi anh"
                                        className="w-full h-full bg-cover bg-no-repeat"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="border h-[100px]">
                                    <img
                                        src="https://res.cloudinary.com/metavere/image/upload/v1692979548/cahoiphile_rpzfy6.png"
                                        alt="Loi anh"
                                        className="w-full h-full bg-cover bg-no-repeat"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="border h-[100px]">
                                    <img
                                        src="https://res.cloudinary.com/metavere/image/upload/v1692979545/tomsotthai1_clootg.png"
                                        alt="Loi anh"
                                        className="w-full h-full bg-cover bg-no-repeat"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Mô tả sản phẩm */}
                <div className="">
                    <h1 className="text-3xl">{productDetail?.name}</h1>
                    <p className="mb-2">
                        <span className="font-semibold text-sm">Mã SP:</span>{' '}
                        5022324
                    </p>
                    <p className="px-0 pb-1">
                        <span className="font-semibold text-sm">
                            Hàu Nướng Phô Mai
                        </span>{' '}
                        được nhiều khách yêu thích vì tính tiện lợi, mùi vị thơm
                        ngon.
                    </p>
                    <p className="px-0 pb-1">
                        <span className="font-semibold text-sm">
                            Thành phần:{' '}
                        </span>{' '}
                        Hàu, Phô mai, Bơ, Sữa tươi, Bột mì, Gia vị
                    </p>
                    <p className="px-0 pb-1">
                        <span className="font-semibold text-sm">Quy cách:</span>{' '}
                        Hộp 6 Con
                    </p>
                    <p className="px-0 pb-1">
                        <span className="font-semibold text-sm">
                            Bảo quản:{' '}
                        </span>{' '}
                        Đông lạnh -18 độ C. HSD 06 tháng kể từ NSX
                    </p>
                    <p className="pxs-0 pb-1">
                        <span className="font-semibold text-sm">
                            Hướng dẫn sử dụng:{' '}
                        </span>{' '}
                        Không cần rã đông, cho vào lò nướng/nồi chiên không dầu
                        150-180 độ C trong 10-12 phút
                    </p>
                    <div className="">
                        <span className="text-2xl font-bold text-[#2cbde5]">
                            {formatPrice(productDetail?.price)}
                        </span>
                        <p className="font-medium text-gray-500 font-normal text-sm">
                            Quy cách <span>6 hộp</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                        <label htmlFor="">Chọn</label>
                        <ul className="flex items-center">
                            <li>
                                <button className="flex justify-center items-center p-2 w-[30px] h-[30px] border rounded-full bg-gray-200">
                                    <GrSubtract />
                                </button>
                            </li>
                            <li>
                                <span className="p-2">1</span>
                            </li>
                            <li>
                                <button className="flex justify-center items-center p-2 w-[30px] h-[30px] border rounded-full bg-gray-200">
                                    <GrAdd />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <p className="py-3 text-sm text-gray-600 italic">
                        "Do đặc tính sản phẩm nên trọng lượng thực tế có thể
                        chênh lệch so với số lượng bạn đặt hàng. Đảo Hải Sản sẽ
                        xác nhận với bạn khi có sự thay đổi"
                    </p>
                    <button
                        className="bg-orange-500 w-[200px] p-2 rounded-md text-white"
                        onClick={()=> handleAddToCart(productDetail)}
                    >
                        Thêm giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
