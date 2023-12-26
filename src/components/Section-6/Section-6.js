import classNames from 'classnames/bind';

import styles from './Section-6.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const cx = classNames.bind(styles);
const listBranch = [
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_2.jpg?1700467467406',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_3.jpg?1700467467406',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_4.jpg?1700467467406',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_5.jpg?1700467467406',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_7.jpg?1700467467406',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_8.jpg?1700467467406',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/brand_image_1.jpg?1700467467406',
];
function SectionSix() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('branchs')}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={7}
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        500: { slidesPerView: 3 },
                        767: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1300: { slidesPerView: 6 },
                    }}
                    loop={true}
                >
                    {listBranch.map((value, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={cx('branch-item')} key={index}>
                                    <img alt="" src={value} />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default SectionSix;
