import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import PricetoString from '~/utills/PriceToString';
import { useSelector } from 'react-redux';

import { getCost } from '~/utills/getCost';

const cx = classNames.bind(styles);

function HeaderCartItem({ _id, MainPhotoURL, name, prices, salePercent }) {
    const product = useSelector((state) => {
        if (!state.login.currentUser) {
            return '';
        } else {
            return state.login.currentUser.cart.find((cart) => _id === Object.keys(cart)[0]);
        }
    });
    const cost = getCost(product, prices, salePercent);
    return (
        <div className={cx('cart-item')} key={_id}>
            <div className={cx('img')}>
                <img alt="" src={MainPhotoURL} />
            </div>
            <div className={cx('description')}>
                <div className={cx('name')}>{name}</div>
                <div className={cx('price')}>{PricetoString(cost)}</div>
            </div>
        </div>
    );
}

export default HeaderCartItem;
