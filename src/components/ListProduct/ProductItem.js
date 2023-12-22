import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import { CartIcon2, EyeIcon, HeartIconFat } from '~/assets/icon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import PricetoString from '~/utills/PriceToString';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '~/redux/actions';

const cx = classNames.bind(styles);

function ProductItem({
    MainPhotoURL,
    Sub1PhotoURL,
    prices,
    salePercent,
    sold,
    name,
    store,
    branch,
    slug,
    _id,
    custom,
}) {
    const user = useSelector((state) => state.login.currentUser);
    const width = (sold / (store + sold)) * 100;
    const cost = Object.values(prices[0])[0];
    const sale = (cost * (100 - (salePercent === -1 ? 0 : salePercent))) / 100;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddCart = (_id) => {
        // dispatch action thunk để lưu vào redux
        if (user) {
            const option = Object.keys(prices[0])[0];
            dispatch(updateCart(_id, 'add', undefined, option));
        } else {
            navigate('/login');
        }
    };

    return (
        <div
            className={cx('item', {
                custom: custom,
            })}
        >
            <div className={cx('img')}>
                <Link to={`/detail/${slug}`}>
                    <img alt="" src={MainPhotoURL} draggable={false} className={cx('img-main')} />
                    <img alt="" src={Sub1PhotoURL} draggable={false} className={cx('img-sub')} />
                </Link>

                <div className={cx('func')}>
                    <Tippy content={<span style={{ fontSize: '1.2rem' }}>Thêm vào giỏ vàng</span>}>
                        <div className={cx('func-item')} onClick={() => handleAddCart(_id)}>
                            <CartIcon2 custom={[styles.cartCustom]} />
                        </div>
                    </Tippy>

                    <Tippy content={<span style={{ fontSize: '1.2rem' }}>Thêm vào yêu thích</span>}>
                        <div className={cx('func-item')}>
                            <HeartIconFat custom={[styles.HeartCustom]} />
                        </div>
                    </Tippy>

                    <Tippy content={<span style={{ fontSize: '1.2rem' }}>Xem nhanh</span>}>
                        <div className={cx('func-item')}>
                            <EyeIcon custom={[styles.EyeCustom]} />
                        </div>
                    </Tippy>
                </div>
            </div>
            <div className={cx('desciption')}>
                <div className={cx('information')}>{name}</div>
                <div className={cx('price')}>
                    <div>{branch}</div>
                    <div className={cx('price-main')}>
                        <span className={cx('price__new')}>{PricetoString(sale)}</span>
                        {salePercent !== -1 && <span className={cx('price__old')}>{PricetoString(cost)}</span>}
                    </div>
                </div>
                <div className={cx('progess')}>
                    <div style={{ width: `${width}%`, height: '10px' }} className={cx('percent')}></div>
                </div>
                <div className={cx('item-footer')}>
                    {store > 10 ? (
                        <>
                            <span className={cx('number')}>{sold} </span>
                            <span> sản phẩm đã bán</span>
                        </>
                    ) : store > 0 ? (
                        <div>
                            <span> ⚡ Sắp hết hàng</span>
                        </div>
                    ) : (
                        <div>
                            <span> ⚡ Đã hết hàng</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
