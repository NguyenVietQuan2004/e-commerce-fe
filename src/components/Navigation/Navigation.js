import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navigation')}>
                <NavLink to="/instruction" className={(nav) => cx({ active: nav.isActive })}>
                    Giới thiệu
                </NavLink>
                <NavLink to="/" className={(nav) => cx({ active: nav.isActive })}>
                    Sản phẩm
                </NavLink>
                <NavLink to="/news" className={(nav) => cx({ active: nav.isActive })}>
                    Tin tức
                </NavLink>
                <NavLink to="/contact" className={(nav) => cx({ active: nav.isActive })}>
                    Liên hệ
                </NavLink>
            </div>
        </div>
    );
}

export default memo(Navigation);
