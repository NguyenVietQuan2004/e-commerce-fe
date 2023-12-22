import styles from './PayPage.module.scss';
import classNames from 'classnames/bind';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ItemCountry({ name, phoneCode, onClick: setCurrentSelector, photoURL, active, onShow }) {
    const handleOnClick = () => {
        setCurrentSelector(photoURL);
        onShow(false);
    };
    return (
        <div className={cx('item-country', { active: active })} onClick={handleOnClick}>
            {name} ({phoneCode})
        </div>
    );
}

export default memo(ItemCountry);
