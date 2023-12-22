import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { EmailIcon, LocationIcon, PhoneIcon } from '~/assets/icon';

const cx = classNames.bind(styles);

function FooterMiddle() {
    return (
        <div className={cx('footer-middle')}>
            <div className={cx('footer-middle-item')}>
                <div>
                    <EmailIcon />
                </div>
                <h5>Điện Thoại</h5>
                <div className={cx('footer-menu', 'btn--contact')}>0763948610</div>
            </div>
            <div className={cx('footer-middle-item')}>
                <div>
                    <PhoneIcon />
                </div>
                <h5>Email</h5>
                <div className={cx('footer-menu', 'btn--contact')}>ngvietquannro@gmail.com</div>
            </div>
            <div className={cx('footer-middle-item')}>
                <div>
                    <LocationIcon />
                </div>
                <h5>Địa chỉ</h5>
                <div className={cx('footer-menu')}>233 Công Viên CVL, Phường Châu Văn Liêm, Quận Ô Môn, TP Cần Thơ</div>
            </div>
        </div>
    );
}

export default FooterMiddle;
