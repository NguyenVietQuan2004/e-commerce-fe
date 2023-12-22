import classNames from 'classnames/bind';

import styles from './Section-2.module.scss';

const cx = classNames.bind(styles);

function SectionTwo() {
    return (
        <div style={{ backgroundColor: 'white' }} className="wrapper">
            <div className={cx('list__card')}>
                <div className={cx('card')}>
                    <div>
                        <img
                            alt=""
                            src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/icon_service_1.png?1691743854548"
                        />
                    </div>
                    <h2 className={cx('card__header')}>Giao Hàng Toàn Quốc</h2>
                    <div>Miễn Phí Vận Chuyển Với Các Đơn Hàng Trị Giá Trên 2.000.000đ</div>
                </div>

                <div className={cx('card')}>
                    <div>
                        <img
                            alt=""
                            src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/icon_service_2.png?1691743854548"
                        />
                    </div>

                    <h2 className={cx('card__header')}>Hổ Trợ Online 24/24</h2>

                    <div>Luôn Hỗ Trợ Khách Hàng 24/24 Tất Cả Các Ngày Trong Tuần</div>
                </div>
                <div className={cx('card')}>
                    <div>
                        <img
                            alt=""
                            src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/icon_service_3.png?1691743854548"
                        />
                    </div>
                    <h2 className={cx('card__header')}>Đổi Hàng Dễ Dàng</h2>
                    <div>Miễn Phí Đổi Trả Trong Vòng 30 Ngày Đầu Tiên Cho Tất Cả Các Mặt Hàng</div>
                </div>
                <div className={cx('card')}>
                    <div>
                        <img
                            alt=""
                            src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/icon_service_4.png?1691743854548"
                        />
                    </div>
                    <h2 className={cx('card__header')}>Quà Tặng Hấp Dẫn</h2>
                    <div>Chương Trình Khuyễn Mãi Cực Lớn Và Hấp Dẫn Hàng Tháng</div>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;
