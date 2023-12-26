import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { ClockIcon, CloseIcon, HeartIcon, MenuIcon } from '~/assets/icon';
import ButtonAccount from '../ButtonAccount';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import { Link, NavLink } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import HeaderCart from './Header-cart';

const cx = classNames.bind(styles);
function Header() {
    const user = useSelector((state) => state.login.currentUser);
    const [scroll, setScroll] = useState('transparent');
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY > 0) {
                setScroll('white');
            } else {
                setScroll('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={cx('wrapper')} style={{ backgroundColor: [scroll] }}>
            <div className={cx('inner')}>
                <span className={cx('menu__icon')} onClick={() => setDisplay('block')}>
                    <MenuIcon />
                </span>
                <div className={cx('modal')} style={{ display: display }} onClick={() => setDisplay('none')}>
                    <div className={cx('menu-modal')}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: '0 0 26px 40px',
                            }}
                        >
                            <h3>Danh mục</h3>
                            <div style={{ cursor: 'pointer', paddingRight: '20px' }} onClick={() => setDisplay('none')}>
                                <CloseIcon />
                            </div>
                        </div>
                        <div className={cx('navigation')}>
                            <NavLink to="/" className={(nav) => cx({ active: nav.isActive })}>
                                Trang chủ
                            </NavLink>
                            <NavLink to="/instruction" className={(nav) => cx({ active: nav.isActive })}>
                                Giới thiệu
                            </NavLink>
                            <NavLink to="/search?value=all" className={(nav) => cx({ active: nav.isActive })}>
                                Sản phẩm
                            </NavLink>
                            <NavLink to="/news/0" className={(nav) => cx({ active: nav.isActive })}>
                                Tin tức
                            </NavLink>
                            <NavLink to="/contact" className={(nav) => cx({ active: nav.isActive })}>
                                Liên hệ
                            </NavLink>
                        </div>
                        <div style={{ marginTop: 'auto', textAlign: 'center', maxWidth: '98%' }}>
                            @ Bản quyền thuộc về Lofi Team | Cung cấp bởi Sapo
                        </div>
                    </div>
                </div>
                <Link to="/" className={cx('img')}>
                    <img
                        alt=""
                        src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/logo.png?1702630690282"
                    />
                </Link>
                <Navigation />
                <div className={cx('user')}>
                    <ButtonAccount photoURL={user?.photoURL} userName={user?.userName} />

                    <div className={cx('loved')}>
                        <HeartIcon />
                        {/* <div>3</div> */}
                    </div>
                    <HeaderCart />
                </div>
            </div>
        </div>
    );
}

export default memo(Header);
