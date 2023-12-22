import Path from '~/components/Path';
import styles from './News.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { listNews } from '~/components/Section-9/Section-9';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('wrapper')}>
            <Path pathList={['Tin tức']} />
            <h2>Tin tức</h2>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <div className={cx('list-news')}>
                        {listNews.map((value, index) => {
                            return (
                                <div className={cx('col')} key={index}>
                                    <div className={cx('news-item')}>
                                        <div className={cx('img')}>
                                            <img alt="" src={value.photoURL} />
                                        </div>
                                        <div className={cx('subject')}>{value.subject}</div>
                                        <div className={cx('description')}>{value.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('category')}>
                        <h3>Danh mục tin tức</h3>
                        <Link to="/">Trang chủ</Link>
                        <Link to="/instruction">Giới thiệu</Link>
                        <Link>Sản phẩm</Link>
                        <Link to="/news" className={cx('active')}>
                            Tin tức
                        </Link>
                        <Link to="/contact">Liên hệ</Link>
                    </div>
                    <div className={cx('hightlight-news')}>
                        <h3>Tin tức nổi bật</h3>
                        {listNews.map((value, index) => (
                            <div className={cx('hightlight-item')} key={index}>
                                <div className={cx('img')}>
                                    <img alt="" src={value.photoURL} />
                                </div>
                                <div className={cx('subject')}>{value.subject}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
