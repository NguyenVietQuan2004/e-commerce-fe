import classNames from 'classnames/bind';
import styles from './Path.module.scss';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const cx = classNames.bind(styles);
function Path({ pathList }) {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">Trang chủ </Link>
            {pathList.map((pathItem) => {
                return (
                    <span key={v4()}>
                        <span>/</span>
                        <span>{pathItem}</span>
                    </span>
                );
            })}
        </div>
    );
}

export default Path;
