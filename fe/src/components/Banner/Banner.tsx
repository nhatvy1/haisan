import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="mx-auto mt-10">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full h-[500px]">
                        <img
                            src="https://res.cloudinary.com/metavere/image/upload/v1695132592/banner2_gs5oyq.webp"
                            alt="Loi anh"
                            className="w-full h-full bg-cover bg-no-repeat"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[500px]">
                        <img
                            src="https://res.cloudinary.com/metavere/image/upload/v1692283608/bannerlogin_adaehm.webp"
                            alt="Loi anh"
                            className="w-full h-full bg-cover bg-no-repeat"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
