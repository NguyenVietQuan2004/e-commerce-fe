import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function SearchItem({ photoURL, name, price }) {
    return (
        <Link className={cx('search__result--item')}>
            <div className={cx('img')}>
                <img alt="" src={photoURL} />
            </div>
            <div className={cx('discription')}>
                <p>{name}</p>
                <span>
                    {price}
                    <p>đ</p>
                </span>
            </div>
        </Link>
    );
}

export default SearchItem;
