import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function SkeletonItem({ count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] }) {
    return (
        <>
            {count.map((value, index) => (
                <div
                    className={cx('item', {
                        custom: true,
                    })}
                    key={index}
                >
                    <div style={{ marginBottom: '10px' }}>
                        <Skeleton height={200} />
                    </div>
                    <div className={cx('')} style={{ padding: '0 10px 10px 10px' }}>
                        <div className={cx('information')}>
                            <Skeleton height={36} />
                        </div>
                        <div className={cx('price')}>
                            <div>
                                <Skeleton width={70} />
                            </div>
                            <div className={cx('price-main')}>
                                <span className={cx('price__new')}>
                                    <Skeleton width={150} />
                                </span>
                            </div>
                        </div>
                        <div className={cx('progess')}>
                            <div style={{ height: '10px' }}>
                                <Skeleton />
                            </div>
                        </div>
                        <div className={cx('item-footer')}>
                            <Skeleton width={100} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SkeletonItem;
