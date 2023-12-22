import classNames from 'classnames/bind';

import styles from './Section-8.module.scss';

const cx = classNames.bind(styles);

function ItemCustomer({ text, name, job, photoURL }) {
    return (
        <div className={cx('cart')}>
            <div className={cx('text')}>{text}</div>
            <div className={cx('img')}>
                <img alt="" src={photoURL} />
            </div>
            <div className={cx('name')}>{name}</div>
            <div style={{ fontSize: '1.5rem' }}>{job}</div>
        </div>
    );
}

export default ItemCustomer;
