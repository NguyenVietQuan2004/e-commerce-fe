import classNames from 'classnames/bind';

import styles from './ButtonAccount.module.scss';
import { UserIcon } from '~/assets/icon';
import PopperWrapper from '../PopperWrapper/PopperWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { logoutService } from '~/Service/logoutService';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ButtonAccount({ userName, photoURL }) {
    const user = useSelector((state) => state.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutService('auth/logout', user, dispatch, navigate);
    };
    if (userName) {
        return (
            <div>
                <div className={cx('wrapper')}>
                    <div className={cx('Menu')}>
                        <PopperWrapper>
                            <Link>Tài khoản của tôi</Link>
                            <Link to="/cart">Đơn mua</Link>
                            <button className={cx('break-line')} onClick={handleLogout}>
                                Đăng xuất
                            </button>
                        </PopperWrapper>
                    </div>
                    <div className={cx('account')}>
                        <div className={cx('userInfo', 'df')}>
                            <div className={cx('userInfo__img')}>
                                <img alt="" src={photoURL} />
                            </div>
                            <span className={cx('userName')}>{userName}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-register')}>
                <PopperWrapper>
                    <div>
                        <Link to="/login" className={cx('item')}>
                            Đăng nhập
                        </Link>
                        <Link to="/register" className={cx('item')}>
                            Đăng ký
                        </Link>
                    </div>
                </PopperWrapper>
            </div>
            <div className={cx('account')}>
                <span>
                    <UserIcon />
                </span>
                <span className={cx('userName')}>Tài khoản</span>
            </div>
        </div>
    );
}

export default memo(ButtonAccount);
