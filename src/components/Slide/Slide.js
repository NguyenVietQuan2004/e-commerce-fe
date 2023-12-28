import classNames from 'classnames/bind';

import styles from './Slide.module.scss';
import Search from './Search/Search';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';

const cx = classNames.bind(styles);
const listSlide = [
    'https://tronhouse.com/assets/data/editor/source/NH%E1%BB%AENG%20%C3%9D%20T%C6%AF%E1%BB%9ENG%20CH%E1%BB%A4P%20%E1%BA%A2NH%20M%E1%BB%B8%20PH%E1%BA%A8M%20%C4%90%C6%AF%E1%BB%A2C%20%C6%AFA%20CHU%E1%BB%98NG%20HI%E1%BB%86N%20NAY/cover%20-%20chup%20hinh%20my%20pham.jpg',
    'https://img4.thuthuatphanmem.vn/uploads/2020/12/25/anh-bia-dung-dich-my-pham-lam-dep_094445967.jpg',
    'https://3cshop.vn/wp-content/uploads/2019/02/tac-dung-my-pham-thien-nhien-doi-voi-quy-trinh-duong-da-2.gif',
];
function Slide() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <h2>Chăm sóc da đơn giản và hiệu quả</h2>
                </div>
                <span>
                    Tìm hiểu cách chăm sóc da hiệu quả với các sản phẩm chăm sóc da hiệu quả và an toàn cho da của bạn
                </span>
                <Search custom="search1" />
            </div>

            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                pagination={{ clickable: true }}
                className={cx('swiper')}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, // Cho phép chuyển đổi bằng cách tương tác với swiper
                }}
            >
                {listSlide.map((value, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={cx('img')}>
                                <img alt="" src={value} />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slide;
