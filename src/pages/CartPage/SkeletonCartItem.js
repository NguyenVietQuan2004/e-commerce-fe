import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cx = classNames.bind(styles);

function SkeletonCartItem() {
    return (
        <>
            {[1, 2, 3, 4, 5].map((value, index) => {
                return (
                    <div className={cx('row')} key={index}>
                        <div className={cx('col-1')}>
                            <div className={cx('img')} style={{ border: 'none' }}>
                                <Skeleton style={{ height: '100%' }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <div className={cx('name')}>
                                    <Skeleton style={{ width: '100%' }} count={2} />
                                </div>
                                <div>
                                    <Skeleton count={1} width={60} />
                                </div>

                                <Tippy content="xóa">
                                    <button className={cx('delete')}>
                                        <Skeleton count={1} width={40} />
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                        <div className={cx('col-2')}>
                            <div>
                                <Skeleton count={1} width={50} />
                            </div>
                        </div>

                        <div className={cx('col-3')}>
                            <div className={cx('number')} style={{ backgroundColor: 'transparent' }}>
                                <Skeleton count={1} width={50} />
                            </div>
                        </div>
                        <div className={cx('price', 'col-4')}>
                            <Skeleton count={1} width={50} />
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default SkeletonCartItem;
