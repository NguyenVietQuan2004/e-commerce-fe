import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '~/assets/img/logo.webp';
import { HeartIcon, MenuIcon } from '~/assets/icon';
import ButtonAccount from '../ButtonAccount';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderCart from './Header-cart';

const cx = classNames.bind(styles);
// xaidf usememmo để không ảnh hưởng đến con khi cha scroll
function Header() {
    const user = useSelector((state) => state.login.currentUser);
    const [scroll, setScroll] = useState('transparent');

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
                <span className={cx('menu__icon')}>
                    <MenuIcon />
                </span>
                <Link to="/" className={cx('img')}>
                    <img alt="" src={logo} />
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

export default Header;
