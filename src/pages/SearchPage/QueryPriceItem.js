import { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { addToPriceChecked, deleteToPriceChecked } from '~/redux/actions';

const cx = classNames.bind(styles);
function QueryPriceItem({ name, price }) {
    const dispatch = useDispatch();
    const listPriceChecked = useSelector((state) => state.listPriceChecked);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(() => {
            const has = listPriceChecked.find((item) => item === price);
            if (has) {
                return true;
            } else {
                return false;
            }
        });
    }, [listPriceChecked, price]);
    const handleOnChangeInput = () => {
        setChecked(!checked);
    };
    useEffect(() => {
        console.log(checked, price);
        if (checked) {
            dispatch(addToPriceChecked(price));
        } else {
            dispatch(deleteToPriceChecked(price));
        }
    }, [checked, dispatch, price]);
    return (
        <div className={cx('row')}>
            <input type="checkbox" checked={checked} onChange={handleOnChangeInput} />
            <span>{name}</span>
        </div>
    );
}

export default QueryPriceItem;
