import classNames from 'classnames/bind';

import styles from './Slide.module.scss';
import Search from './Search/Search';

const cx = classNames.bind(styles);

function Slide() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <h2>Chăm sóc da đơn giản và hiệu quả</h2>
                </div>
                <span>
                    Tìm hiểu cách chăm sóc da hiệu quả với các sản phẩm chăm sóc da hiệu quả và an toàn cho da của bạn
                </span>
                <Search custom="search1" />
            </div>
        </div>
    );
}

export default Slide;
