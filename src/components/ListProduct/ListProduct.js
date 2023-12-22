import ProductItem from './ProductItem';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ListProduct({ data, width = '100%', height }) {
    return (
        <div style={{ width: width, display: 'flex' }}>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={4}
                slidesPerView={4}
                grabCursor={true}
                breakpoints={{
                    1300: { slidesPerView: 5 },
                    1024: { slidesPerView: 4 },
                    767: { slidesPerView: 3 },
                    0: { slidesPerView: 2 },
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
            >
                {data.map((pro, index) => {
                    return (
                        <SwiperSlide style={{ marginBottom: '50px !important' }} key={index}>
                            <ProductItem
                                key={pro._id}
                                MainPhotoURL={pro.MainPhotoURL}
                                Sub1PhotoURL={pro.Sub1PhotoURL}
                                prices={pro.prices}
                                salePercent={pro.salePercent}
                                sold={pro.sold}
                                name={pro.name}
                                store={pro.store}
                                branch={pro.branch}
                                slug={pro.slug}
                                _id={pro._id}
                                height={height}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default ListProduct;
