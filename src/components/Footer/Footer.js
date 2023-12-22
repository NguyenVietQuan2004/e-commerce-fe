import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '~/assets/icon';
import FooterMiddle from './FooterMiddle';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-top')}>
                <div className={cx('footer-top-item', 'col-1')}>
                    <h3>Giới Thiệu</h3>
                    <p>
                        Lofi Cosmetic trực tiếp sản xuất các dòng mỹ phẩm thiên nhiên, công ty đi theo hướng phát triển
                        bền vững và lâu dài các dòng mỹ phẩm thiên nhiên an toàn cho da nhưng không kém phần hiệu quả.
                        Hiện tại Lofi Cosmetic có mạng lưới các nhà phân phối, đại lý bán lẻ các sản phẩm mỹ phẩm thiên
                        nhiên phủ rộng khắp Hà Nội và các tỉnh miền Bắc.
                    </p>
                </div>
                <div className={cx('footer-top-item', 'col-2')}>
                    <h3>Về Chúng Tôi</h3>
                    <div className={cx('footer-menu')}>
                        <Link to="/">Trang chủ</Link>
                        <Link to="/instruction">Giới thiệu</Link>
                        <Link to="/products">Sản phẩm</Link>
                        <Link to="/news">Tin tức</Link>
                        <Link to="/contact">Liên hệ</Link>
                    </div>
                </div>
                <div className={cx('footer-top-item', 'col-3')}>
                    <h3>Hỗ Trợ Khách Hàng</h3>
                    <div className={cx('footer-menu')}>
                        <Link to="/">Đơn hàng</Link>
                        <Link to="/">Chính sách giao hàng</Link>
                        <Link to="/">Chính sách đổi trả</Link>
                        <Link to="/">Chính sách bán hàng</Link>
                    </div>
                </div>
                <div className={cx('footer-top-item', 'col-4')}>
                    <h3>Theo Dõi Chúng Tôi</h3>
                    <div className={cx('footer-menu', 'social')}>
                        <a href="/">
                            <YoutubeIcon />
                        </a>
                        <a href="/">
                            <FacebookIcon />
                        </a>
                        <a href="/">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
            {/* footer middle */}
            <FooterMiddle />
            <div className={cx('footer-end')}>@ Bản quyền thuộc về Lofi Team | Cung cấp bởi Sapo</div>
        </div>
    );
}

export default Footer;
