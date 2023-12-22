import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { SearchIcon } from '~/assets/icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search({ custom }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            navigate(`/search?value=${inputValue}`);
        }
    };

    return (
        <div className={cx(custom)}>
            <form onSubmit={handleSearch}>
                <div className={cx('search')}>
                    <div className={cx('search__header')}>
                        <div>
                            <SearchIcon />
                        </div>
                        <input
                            placeholder="Tìm kiếm sản phẩm"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <button className={cx('btn-search')}>Tìm kiếm</button>
                </div>
            </form>
        </div>
    );
}

export default Search;
