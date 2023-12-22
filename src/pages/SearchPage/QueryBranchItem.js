import { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { addToBranchChecked, deleteToBranchChecked } from '~/redux/actions';

const cx = classNames.bind(styles);
function QueryBranchItem({ value }) {
    const dispatch = useDispatch();
    const listBranchChecked = useSelector((state) => state.listBranchChecked);
    const [checked, setChecked] = useState(false);

    const handleOnChangeInput = () => {
        setChecked(!checked);
    };
    useEffect(() => {
        setChecked(() => {
            const has = listBranchChecked.find((item) => item === value);
            if (has) {
                return true;
            } else {
                return false;
            }
        });
    }, [listBranchChecked, value]);
    useEffect(() => {
        if (checked) {
            dispatch(addToBranchChecked(value));
        } else {
            dispatch(deleteToBranchChecked(value));
        }
    }, [checked, dispatch, value]);
    return (
        <div className={cx('row')}>
            <input type="checkbox" checked={checked} onChange={handleOnChangeInput} />
            <span>{value}</span>
        </div>
    );
}

export default QueryBranchItem;
