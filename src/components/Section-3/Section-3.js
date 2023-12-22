import classNames from 'classnames/bind';

import styles from './Section-3.module.scss';

const cx = classNames.bind(styles);

function SectionThree() {
    return (
        <div className={cx('wrapper')}>
            <h3>ALOE VERA</h3>
            <h2>CHIẾT XUẤT TỪ THIÊN NHIÊN</h2>
            <div className={cx('best-product')}>
                <div className={cx('list__card-desciption')}>
                    <div className={cx('item')}>
                        <div className={cx('icon-img')}>
                            <div>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/salens-icon-1.svg?1691743854548"
                                />
                            </div>
                        </div>
                        <div className={cx('description')}>
                            <h2>Làm sạch da</h2>
                            <span>Lấy đi bụi bẩn, bã nhờn và lớp trang điểm</span>
                        </div>
                    </div>

                    <div className={cx('item')}>
                        <div className={cx('icon-img')}>
                            <div>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/salens-icon-2.svg?1691743854548"
                                />
                            </div>
                        </div>
                        <div className={cx('description')}>
                            <h2>Cấp ẩm</h2>
                            <span>Dưỡng trắng & dưỡng ẩm cùng lúc</span>
                        </div>
                    </div>

                    <div className={cx('item')}>
                        <div className={cx('icon-img')}>
                            <div>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/salens-icon-3.svg?1691743854548"
                                />
                            </div>
                        </div>
                        <div className={cx('description')}>
                            <h2>Ngừa lão hóa</h2>
                            <span>
                                Nhẹ nhàng loại bỏ tế bào chết, chống oxy hoá, hỗ trợ quá trình sản sinh collagen
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('img')}>
                    <img
                        alt=""
                        src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/480x600.png?1691743854548"
                    />
                </div>
                <div className={cx('list__card-desciption', 'right')}>
                    <div className={cx('item')}>
                        <div className={cx('description')}>
                            <h2>Dịu nhẹ</h2>
                            <span>Dịu nhẹ Làm thông thoáng lỗ chân lông</span>
                        </div>
                        <div className={cx('icon-img')}>
                            <div>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/salens-icon-4.svg?1691743854548"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cx('item')}>
                        <div className={cx('description')}>
                            <h2>Ngừa mụn</h2>
                            <span>Giảm mụn hiệu quả và điều tiết cân bằng lượng dầu thừa.</span>
                        </div>
                        <div className={cx('icon-img')}>
                            <div>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/salens-icon-5.svg?1691743854548"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cx('item')}>
                        <div className={cx('description')}>
                            <h2>Phù hợp da dầu/mụn</h2>
                            <span>Độ pH 5.5 giống với độ pH tự nhiên trên da, giúp củng cố hàng rào bảo vệ da</span>
                        </div>
                        <div className={cx('icon-img')}>
                            <div>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/salens-icon-6.svg?1691743854548"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
