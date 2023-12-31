import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { CartIcon } from '~/assets/icon';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../PopperWrapper/PopperWrapper';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartThunk } from '~/redux/actions';
import { Link } from 'react-router-dom';
import HeaderCartItem from './Header-cart-item';

const cx = classNames.bind(styles);

function HeaderCart() {
    const user = useSelector((state) => state.login.currentUser);
    const listCart = useSelector((state) => state.cart.listCart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.cart.length >= 0) {
            dispatch(fetchCartThunk());
        }
    }, [user?.cart.length, dispatch]);

    return (
        <Tippy
            interactive={true}
            offset={[-138, -10]}
            hideOnClick={true}
            render={(attrs) => (
                <div className={cx('cart_wrapper')}>
                    <PopperWrapper>
                        <div className={cx('cart-list')}>
                            {listCart?.products?.length ? (
                                listCart.products.map((cart, index) => {
                                    return (
                                        <HeaderCartItem
                                            name={cart.name}
                                            MainPhotoURL={cart.MainPhotoURL}
                                            prices={cart.prices}
                                            salePercent={cart.salePercent}
                                            _id={cart._id}
                                            key={cart._id}
                                        />
                                    );
                                })
                            ) : (
                                <div className={cx('empty-cart')}>
                                    <div className={cx('img')}>
                                        <img
                                            alt=""
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
                                        />
                                    </div>

                                    <div>Chưa có sản phẩm</div>
                                </div>
                            )}
                        </div>
                        {listCart?.products?.length > 0 && (
                            <div className={cx('more-btn')}>
                                <span>
                                    {listCart.total > 3 ? listCart.total - listCart.products.length : 0} sản phẩm khác
                                </span>
                                <Link to={'/cart'}>Xem giỏ hàng</Link>
                            </div>
                        )}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('store')}>
                <span className={cx('icon__cart')}>
                    <CartIcon />
                    {listCart?.products?.length > 0 ? (
                        <div>{listCart.total > 9 ? '9+' : listCart.total}</div>
                    ) : (
                        <div>0</div>
                    )}
                </span>
                <p>Cart</p>
            </div>
        </Tippy>
    );
}

export default memo(HeaderCart);
