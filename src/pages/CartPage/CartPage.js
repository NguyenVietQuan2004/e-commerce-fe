import Path from '~/components/Path';
import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '~/utills/httpRequest';
// import ReactPaginate from 'react-paginate';
import { loginSuccess } from '~/redux/actions';
import PricetoString from '~/utills/PriceToString';
import { CartIcon, LocateIcon } from '~/assets/icon';
import SkeletonCartItem from './SkeletonCartItem';

const cx = classNames.bind(styles);

function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.login.currentUser);
    const totalCart = useSelector((state) => state.totalCart);
    const httpRequest = axiosInstance(user, dispatch, loginSuccess);
    const [listCart, setListCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        window.scroll({
            top: 0,
        });
    }, []);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            const fetchAPI = async () => {
                const keys = [];
                user.cart.map((pro) => keys.push(Object.keys(pro)[0]));
                const data = await httpRequest.get(
                    `search?field=cart&limit=100&page=1`,
                    {
                        params: {
                            value: keys,
                        },
                    },
                    {
                        headers: {
                            token: `Bearer ${user.accessToken}`,
                        },
                    },
                );
                const { products } = data.data;
                setIsLoading(false);
                setListCart(products);
            };
            fetchAPI();
        }
        // eslint-disable-next-line
    }, [user]);

    return (
        <div className={cx('wrapper')}>
            <Path pathList={['Giỏ hàng']} />
            <h3>Giỏ Hàng Của Bạn</h3>
            <div className={cx('content')}>
                <div className={cx('container')}>
                    {!isLoading ? (
                        listCart?.length > 0 ? (
                            <div className={cx('table')}>
                                <div className={cx('row', 'header')}>
                                    <div className={cx('col-1')}>
                                        <div>
                                            {/* <input type="checkbox" style={{ scale: '1.3', marginRight: '20px' }} /> */}
                                            Sản phẩm
                                        </div>
                                    </div>
                                    <div className={cx('col-2')}>Giá tiền</div>
                                    <div className={cx('col-3')}>Số lượng</div>
                                    <div className={cx('col-4')}>Thành tiền</div>
                                </div>
                                <div style={{ width: '100%' }}>
                                    {listCart.map((value, index) => (
                                        <CartItem
                                            key={value._id}
                                            name={value.name}
                                            photoURL={value.MainPhotoURL}
                                            store={value.store}
                                            salePercent={value.salePercent}
                                            prices={value.prices}
                                            _id={value._id}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className={cx('empty-cart')}>
                                <CartIcon /> Giỏ hàng trống
                            </div>
                        )
                    ) : (
                        <div className={cx('table')}>
                            <div style={{ width: '100%' }}>
                                <SkeletonCartItem />
                            </div>
                        </div>
                    )}

                    {listCart?.length > 0 && (
                        <div className={cx('bill')}>
                            <div className={cx('header')}>
                                <div className={cx('locate')}>Địa điểm</div>
                                <div
                                    style={{
                                        fontSize: '1.4rem',
                                        paddingTop: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <LocateIcon /> Add Shipping Address
                                </div>
                            </div>
                            <div className={cx('middle')}>
                                <div className={cx('subject')}>Thông tin đơn hàng</div>

                                <div className={cx('detail')}>
                                    <span>Tạm tính ({totalCart.IDListCartBuy.length} sản phẩm)</span>
                                    <div>{PricetoString(totalCart.total)}</div>
                                </div>
                                <div className={cx('detail')}>
                                    <span>Phí vận chuyển</span> <div>{PricetoString(100000)}</div>
                                </div>
                                <div className={cx('sale-code')}>
                                    <input placeholder="Nhập mã giảm giá (mã chỉ áp dụng 1 lần)" />
                                    <button>Áp dụng</button>
                                </div>
                            </div>
                            <div className={cx('footer')}>
                                <div className={cx('total')}>
                                    <span>Tổng cộng</span>
                                    <div className={cx('price')}>{PricetoString(totalCart.total + 100000)}</div>
                                </div>
                                <div className={cx('sub')}>
                                    Đã bao gồm <span> VAT</span>(nếu có)
                                </div>
                                <Link to={totalCart.IDListCartBuy.length > 0 ? '/pay' : '#'} className={cx('submit')}>
                                    Tiến hành đặt hàng ({totalCart.IDListCartBuy.length})
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartPage;
