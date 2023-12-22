import styles from './FlashSale.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { searchService } from '~/Service/searchService';
import ListProduct from '../ListProduct';
import CountTime from '../CountTime';

const cx = classNames.bind(styles);

function FlashSale({ content, countTime = false, Subject, limit }) {
    const [productSale, setProductSale] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const { products } = await searchService(`search?value=true&field=${Subject}&limit=${limit}&page=1`);
            if (products) {
                setProductSale(products);
            }
        };
        fetchAPI();
    }, [Subject, limit]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>{content}</h2>
                {countTime && (
                    <div className={cx('timeUpdate')}>
                        <CountTime />
                    </div>
                )}
            </div>
            <div className="list__sale">
                <ListProduct data={productSale} noWrap={true} />
            </div>
        </div>
    );
}

export default FlashSale;
