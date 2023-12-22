import styles from './PayPage.module.scss';
import classNames from 'classnames/bind';
import PricetoString from '~/utills/PriceToString';

const cx = classNames.bind(styles);
function PayItem({ photoURL, name, _id, priceTotal, count }) {
    return (
        <div className={cx('item')}>
            <div className={cx('img-wrap')}>
                <div className={cx('number')}>{count}</div>
                <div className={cx('img')}>
                    <img alt="" src={photoURL} />
                </div>
            </div>
            <div className={cx('description')}>{name}</div>
            <div className={cx('price')}>{PricetoString(priceTotal)}</div>
        </div>
    );
}

export default PayItem;
