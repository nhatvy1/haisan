import { Banner, ProductCard } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { useEffect } from 'react';
import { getProductBestSelling } from '../../../store/slices/product.best.selling';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../../styles/swiper.custom.css';

const HomePage = () => {
    const dispatch = useAppDispatch();

    const productLists = useSelector(
        (state: RootState) => state.productBestSell.productsList,
    );
    console.log('Check product best selling: ', productLists);

    useEffect(() => {
        dispatch(getProductBestSelling());
    }, []);

    return (
        <div className="container mx-auto">
            <Banner />
            <p className="my-5 text-2xl uppercase font-semibold">
                Bán chạy nhất
            </p>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={2000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {productLists?.length > 0 &&
                        productLists.map((item) => (
                            <SwiperSlide key={item.productId}>
                                <ProductCard
                                    id={item.Product.id}
                                    name={item.Product.name}
                                    images={item.Product.images!}
                                    price={+item.Product.price!}
                                    discount={+item.Product.discount!}
                                    unit={item.Product.unit}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomePage;
