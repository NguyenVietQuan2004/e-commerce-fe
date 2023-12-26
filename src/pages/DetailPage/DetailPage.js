import Path from '~/components/Path';
import styles from './DetailPage.module.scss';
import classNames from 'classnames/bind';
import PricetoString from '~/utills/PriceToString';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchService } from '~/Service/searchService';
import { HeartIconFat, HeartIconFatFull } from '~/assets/icon';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '~/redux/actions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';

const cx = classNames.bind(styles);
const imgPayMethod = [
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/trustbadge_1.jpg?1691743854548',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/trustbadge_4.jpg?1691743854548',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/trustbadge_1.jpg?1691743854548',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/trustbadge_4.jpg?1691743854548',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/trustbadge_1.jpg?1691743854548',
    'https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/trustbadge_4.jpg?1691743854548',
];
function DetailPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    const [subImgActive, setSubImgActive] = useState('');
    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentOption, setCurrentOption] = useState('none');
    const [count, setCount] = useState(1);
    const [path, setPath] = useState([]);
    const user = useSelector((state) => state.login.currentUser);

    // chinhr giá chỗ này tại vì nó trừ đi -1 nên chỉ còn 99% sản phẩm
    const priceSale = (currentPrice * (100 - (product.salePercent === -1 ? 0 : product.salePercent))) / 100;

    useEffect(() => {
        const fetchAPI = async () => {
            const { products } = await searchService(`search?value=${slug}&field=slug&limit=1&page=1`);
            if (products?.length) {
                setProduct(...products);
                const { MainPhotoURL, prices, usefor } = products[0];
                const values = Object.values(prices[0]);
                const Options = Object.keys(prices[0]);
                setSubImgActive(MainPhotoURL);
                setCurrentPrice(values[0]);
                setCurrentOption(Options[0]);
                setPath(() => {
                    return usefor.split(':');
                });
            }
        };
        fetchAPI();
    }, [slug]);
    const handleByeNow = () => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(updateCart(product._id, 'add', count, currentOption));
            navigate('/cart');
        }
    };
    const handleOnClickAddCart = () => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(updateCart(product._id, 'add', count, currentOption));
        }
    };
    const handleClickMinus = () => {
        setCount((pre) => {
            if (pre === 1) {
                return 1;
            } else {
                return pre - 1;
            }
        });
    };
    const handleClickPlus = () => {
        const maxCount = product.store;
        setCount((pre) => {
            if (pre === maxCount) {
                return pre;
            } else {
                return pre + 1;
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Path pathList={[`${path[0]}`, `${path[1]}`]} />
            <div className={cx('content')}>
                <div className={cx('left', 'lg-4', 'm-6', 'sm-12')}>
                    <div>
                        <div className={cx('img')}>
                            <img alt="" src={subImgActive} />
                            <div className={cx('heart')}>{true ? <HeartIconFatFull /> : <HeartIconFat />}</div>
                        </div>
                    </div>
                    <div className={cx('sub-img')}>
                        <div
                            className={cx('sub-img-item', {
                                [styles.active]: subImgActive === product.MainPhotoURL,
                            })}
                            onClick={() => setSubImgActive(product.MainPhotoURL)}
                        >
                            <img alt="" src={product.MainPhotoURL} />
                        </div>
                        <div
                            className={cx('sub-img-item', {
                                [styles.active]: subImgActive === product.Sub1PhotoURL,
                            })}
                            onClick={() => setSubImgActive(product.Sub1PhotoURL)}
                        >
                            <img alt="" src={product.Sub1PhotoURL} />
                        </div>
                        <div
                            className={cx('sub-img-item', {
                                [styles.active]: subImgActive === product.Sub2PhotoURL,
                            })}
                            onClick={() => setSubImgActive(product.Sub2PhotoURL)}
                        >
                            <img alt="" src={product.Sub2PhotoURL} />
                        </div>
                    </div>
                </div>
                <div className={cx('middle', 'lg-4', 'm-6', 'sm-12')}>
                    <h3>{product.name}</h3>
                    <div>
                        Thương hiệu:
                        <span style={{ marginRight: '8px' }}> {product.branch}</span>
                        Mã:
                        <span> {product.code}</span>
                    </div>
                    <div className={cx('price')}>
                        <span className={cx('price__new')}>{PricetoString(priceSale)}</span>
                        {product.salePercent !== -1 && (
                            <span className={cx('price__old')}>{PricetoString(currentPrice)}</span>
                        )}
                    </div>
                    {product.salePercent !== -1 && (
                        <div>
                            (Tiết kiệm: <span className={cx('save')}>{PricetoString(currentPrice - priceSale)})</span>
                        </div>
                    )}

                    {product.prices?.length > 1 && (
                        <div style={{ marginTop: '10px' }}>
                            <span>Option:</span>
                            <div className={cx('size')}>
                                {product.prices.map((priceItem) => {
                                    if (product.prices.length > 1) {
                                        const keys = Object.keys(priceItem);
                                        return (
                                            <div
                                                key={uuidv4()}
                                                className={cx('size-item', {
                                                    [styles.active]: keys[0] === currentOption,
                                                })}
                                                onClick={() => {
                                                    setCurrentPrice(priceItem[keys[0]]);
                                                    setCurrentOption(keys[0]);
                                                }}
                                            >
                                                {keys[0]}
                                            </div>
                                        );
                                    } else {
                                        return '';
                                    }
                                })}
                            </div>
                        </div>
                    )}
                    {product.store >= 1 ? (
                        <div className={cx('number')}>
                            <button onClick={handleClickMinus}>-</button>
                            <span>{count}</span>
                            <button onClick={handleClickPlus}>+</button>
                        </div>
                    ) : (
                        <div>Đã hét hàng</div>
                    )}
                    <div>
                        <button className={cx('btn', 'buy-now')} onClick={handleByeNow}>
                            Mua ngay
                        </button>
                        <button className={cx('btn')} onClick={handleOnClickAddCart}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                    <div className={cx('pay')}>
                        <div>Phương thức thanh toán</div>
                        <Swiper
                            modules={[Pagination, A11y]}
                            spaceBetween={30}
                            slidesPerView={3}
                            grabCursor={true}
                            breakpoints={{
                                1300: { slidesPerView: 5 },
                                1024: { slidesPerView: 4 },
                                767: { slidesPerView: 3 },
                            }}
                        >
                            <div className={cx('pay-list')}>
                                {imgPayMethod.map((value, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={cx('pay-card')}>
                                                <img alt="" src={value} />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </div>
                        </Swiper>
                    </div>
                    <div className={cx('media')}>
                        <div className={cx('media-item')}>
                            <div className={cx('img')}>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/policises_1.png?1691743854548"
                                />
                            </div>
                            <span> Giao hàng toàn quốc</span>
                        </div>
                        <div className={cx('media-item')}>
                            <div className={cx('img')}>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/policises_4.png?1691743854548"
                                />
                            </div>
                            <span> Miễn phí vận chuyển đơn từ 80k</span>
                        </div>
                        <div className={cx('media-item')}>
                            <div className={cx('img')}>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/policises_2.png?1691743854548"
                                />
                            </div>
                            <span>Tích điểm tất cả sản phẩm</span>
                        </div>
                        <div className={cx('media-item')}>
                            <div className={cx('img')}>
                                <img
                                    alt=""
                                    src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/policises_3.png?1691743854548"
                                />
                            </div>
                            <span>Cam kết chính hãng</span>
                        </div>
                    </div>
                </div>
                <div className={cx('right', 'lg-4', 'm-6', 'sm-12')}>
                    <div>
                        {[1, 2, 3, 4, 5].map((value, index) => {
                            return (
                                <div className={cx('sale-card')} key={index}>
                                    <div className={cx('header')}>NHẬP MÃ: EXTRA</div>
                                    <div className={cx('description')}>Mã giảm THÊM 50K cho đơn hàng từ 499K</div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <button>Sao chép mã</button>
                                        <Link to="">Điều kiện</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
