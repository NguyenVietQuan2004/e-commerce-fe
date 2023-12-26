import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useState } from 'react';
import { ContactIcon, EmailIconContact, LocateIconContact, PhoneIconContact, ZaloIconContact } from '~/assets/icon';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuContact({ children }) {
    const [isShowContact, setIsShowContact] = useState('none');
    return (
        <div className={cx('wrap-contact-icon')}>
            <div
                className={cx('contact-icon')}
                onClick={() =>
                    setIsShowContact((pre) => {
                        if (pre === 'block') return 'none';
                        return 'block';
                    })
                }
            >
                <ContactIcon />
            </div>
            <div className={cx('menu-contact')} style={{ display: isShowContact }}>
                <a href="tel:+0763948610" className={cx('contact-item')}>
                    <PhoneIconContact />
                    Gọi ngay cho chúng tôi
                </a>
                <a href="https://zalo.me/0763948610" target="_blank" rel="noreferrer" className={cx('contact-item')}>
                    <ZaloIconContact /> Chat với chúng tôi qua zalo
                </a>
                <Link to="/contact" className={cx('contact-item')}>
                    <LocateIconContact /> Thông tin cửa hàng
                </Link>
                <a href="mailto:ngvietquannro@gmail.com" className={cx('contact-item')}>
                    <EmailIconContact />
                    Email
                </a>
            </div>
        </div>
    );
}

export default MenuContact;
