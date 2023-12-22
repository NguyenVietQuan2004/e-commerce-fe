import Path from '~/components/Path';
import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '~/utills/httpRequest';
// import ReactPaginate from 'react-paginate';
import { changeCheckedAll, loginSuccess } from '~/redux/actions';
import PricetoString from '~/utills/PriceToString';
import { LocateIcon } from '~/assets/icon';

const cx = classNames.bind(styles);

function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.login.currentUser);
    const totalCart = useSelector((state) => state.totalCart);
    const isCheckAll = useSelector((state) => state.isCheckedAll);
    const httpRequest = axiosInstance(user, dispatch, loginSuccess);
    const [listCart, setListCart] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [pageCount, setPageCount] = useState(0);
    const [isCheckBoxAll, setIsCheckBoxAll] = useState(false);

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
                // const { products, pageCount } = data.data;
                const { products } = data.data;

                setListCart(products);
                // setPageCount(pageCount);
            };
            fetchAPI();
        }
        // eslint-disable-next-line
    }, [user]);
    // [currentPage, user]
    // const handlePageClick = (data) => {
    //     setCurrentPage(() => data.selected + 1);
    // };
    const handleOnchangeCheckedAll = () => {
        setIsCheckBoxAll(!isCheckBoxAll);
        dispatch(changeCheckedAll(!isCheckBoxAll));
    };
    return (
        <div className={cx('wrapper')}>
            <Path pathList={['Giỏ hàng']} />
            <h3>Giỏ Hàng Của Bạn</h3>
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <div className={cx('table')}>
                        <div className={cx('row', 'header')}>
                            <div className={cx('col-1')}>
                                <div>
                                    <input
                                        type="checkbox"
                                        style={{ scale: '2', marginRight: '20px' }}
                                        checked={isCheckAll}
                                        onChange={handleOnchangeCheckedAll}
                                    />
                                    Chọn tất cả trang này
                                </div>
                            </div>
                            <div className={cx('col-2')}>ĐƠN GIÁ</div>
                            <div className={cx('col-3')}>SỐ LƯỢNG</div>
                            <div className={cx('col-4')}>LỰA CHỌN</div>
                            <div className={cx('col-5')}>THÀNH TIỀN</div>
                        </div>
                        <div>
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
                                Xác nhận giỏ hàng ({totalCart.IDListCartBuy.length})
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <ReactPaginate
                    className={cx('paginate')}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    activeClassName={cx('active')}
                /> */}
            </div>
        </div>
    );
}

export default CartPage;