import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
import PricetoString from '~/utills/PriceToString';
import { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTotalCart, deleteTotalCart, updateCart, updateTotalCart } from '~/redux/actions';
import { useNavigate } from 'react-router-dom';
import useDebounced from '~/hooks/useDebounced';
import { getCost } from '~/utills/getCost';
import { BinIcon } from '~/assets/icon';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function CartItem({ name, photoURL, prices, salePercent, store, _id }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => {
        if (!state.login.currentUser) {
            return '';
        } else {
            return state.login.currentUser.cart.find((cart) => _id === Object.keys(cart)[0]);
        }
    });
    // const isCheckAll = useSelector((state) => state.isCheckedAll);
    // useEffect(() => {
    //     if (isCheckAll) {
    //         setIsChecked(true);
    //     } else {
    //         setIsChecked(false);
    //     }
    // }, [isCheckAll]);
    const [count, setCount] = useState(() => {
        if (product) {
            if (!product[_id]) {
                navigate('/login');
            } else {
                return product[_id];
            }
        }
    });
    const [cost, setCost] = useState(0);
    const isMounted = useRef(false);
    const debounced = useDebounced(count);
    // lỗi re render quá nhiều do redux real time
    const cartConfirm = useSelector((state) => {
        return state.totalCart.IDListCartBuy.find((item) => {
            const id = Object.values(item)[0];
            return id === _id;
        });
    });
    const [isChecked, setIsChecked] = useState(() => {
        if (cartConfirm) {
            return true;
        } else {
            return false;
        }
    });

    useEffect(() => {
        if (isMounted.current) {
            dispatch(updateCart(_id, 'add', count, product.option));
        } else {
            isMounted.current = true;
        }

        setCost(getCost(product, prices, salePercent));

        // eslint-disable-next-line
    }, [debounced]);

    const handleOnclickMinus = () => {
        setCount((pre) => {
            if (pre === 1) {
                return 1;
            } else {
                return pre - 1;
            }
        });
        if (isChecked && count > 1) {
            dispatch(updateTotalCart(_id, cost, count - 1, 'minus'));
        }
    };
    const HandleOnclickPlus = () => {
        const maxCount = store;
        setCount((pre) => {
            if (pre === maxCount) {
                return pre;
            } else {
                return pre + 1;
            }
        });
        if (isChecked && count <= maxCount - 1) {
            dispatch(updateTotalCart(_id, cost, count + 1, 'plus'));
        }
    };
    const handleDeleteCart = () => {
        dispatch(updateCart(_id, 'delete'));
        if (isChecked) {
            dispatch(deleteTotalCart(_id, cost, count));
        }
    };

    useEffect(() => {
        if (isChecked) {
            dispatch(addTotalCart(_id, cost, count));
        } else {
            dispatch(deleteTotalCart(_id, cost, count));
        }
        // eslint-disable-next-line
    }, [isChecked]);
    return (
        <div className={cx('row')}>
            <div className={cx('col-1')}>
                <input
                    type="checkbox"
                    style={{ scale: '2' }}
                    onChange={() => setIsChecked(!isChecked)}
                    checked={isChecked}
                />
                <div className={cx('img')}>
                    <img alt="" src={photoURL} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={cx('name')}>{name}</div>
                    <Tippy content="xóa">
                        <button className={cx('delete')} onClick={handleDeleteCart}>
                            <BinIcon />
                        </button>
                    </Tippy>
                </div>
            </div>
            <div className={cx('col-2')}>
                <div>{PricetoString(cost, 'not:d')} </div>
                <div className={cx('number', 'number-temp')}>
                    <button onClick={handleOnclickMinus}>-</button>
                    <span>{count}</span>
                    <button onClick={HandleOnclickPlus}>+</button>
                </div>
            </div>

            <div className={cx('col-3')}>
                <div className={cx('number')}>
                    <button onClick={handleOnclickMinus}>-</button>
                    <span>{count}</span>
                    <button onClick={HandleOnclickPlus}>+</button>
                </div>
            </div>
            <div className={cx('col-4')}>{product?.option === 'NaN' ? '' : product?.option}</div>
            <div className={cx('price', 'col-5')}>{PricetoString(cost * count)}</div>
        </div>
    );
}

export default memo(CartItem);
