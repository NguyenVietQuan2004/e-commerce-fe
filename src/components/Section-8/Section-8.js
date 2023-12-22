import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Section-8.module.scss';
import ItemCustomer from './ItemCustomer';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
const listCustomer = [
    {
        name: 'Anh Thư',
        job: 'FreeLancer',
        photoURL: 'https://f10-zpcloud.zdn.vn/7904648574832590685/2c08bf09ca8b1ad5439a.jpg',
        text: 'Nhân viên tư vấn cho mình rất kỹ, nên nghe xong mua muốn lủng cả túi. Sẽ là khách hàng trung thành của Lofi Cosmetic',
    },
    {
        name: 'Hương',
        job: 'Student',
        photoURL: 'https://i.pinimg.com/564x/84/71/cd/8471cdc3650e47f60ba7a50edbadf5a5.jpg',
        text: 'Shop đa dạng hàng hóa, gần như là cái gì mình muốn mua shop đều có hết. Yêu shop, mãi ủng hộ shop.',
    },
    {
        name: 'Diễm Trang',
        job: 'Lập trình viên',
        photoURL: 'https://i.pinimg.com/564x/ee/0a/e4/ee0ae449186b767ea2c021ff4b9e2d11.jpg',
        text: 'Mình dùng sữa rửa mặt ALOE xong da mịn màng, làm sạch sâu. Các bạn nữ da dầu như mình dùng thử nhé.',
    },
];

const cx = classNames.bind(styles);

function SectionEight() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('customer__comment')}>
                <h2>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI </h2>

                <Swiper
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    grabCursor={true}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 2000, // Thời gian giữa các lần chuyển đổi (5 giây)
                        disableOnInteraction: false, // Cho phép chuyển đổi bằng cách tương tác với swiper
                    }}
                >
                    <div className={cx('list-customer')}>
                        {listCustomer.map((value, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ItemCustomer
                                        text={value.text}
                                        name={value.name}
                                        job={value.job}
                                        photoURL={value.photoURL}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default SectionEight;
