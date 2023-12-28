import Path from '~/components/Path';
import styles from './News.module.scss';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import { listNews } from '~/components/Section-9/Section-9';
import NewsFour from './News-4';
import NewsOne from './News-1';
import NewsTwo from './News-2';
import NewsThree from './News-3';
import NewsFive from './News-5';
import NewsSix from './News-6';
import NewsZero from './News-0';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function News() {
    const { slug } = useParams();
    useEffect(() => {
        window.scroll({
            top: 0,
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Path pathList={['Tin tức']} />
            <h2>Tin tức</h2>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    {[0].map((value, index) => {
                        switch (slug) {
                            case '1':
                                return <NewsOne key={index} />;
                            case '2':
                                return <NewsTwo key={index} />;
                            case '3':
                                return <NewsThree key={index} />;
                            case '4':
                                return <NewsFour key={index} />;
                            case '5':
                                return <NewsFive key={index} />;
                            case '6':
                                return <NewsSix key={index} />;
                            default:
                                return <NewsZero key={index} />;
                        }
                    })}
                </div>
                <div className={cx('right')}>
                    <div className={cx('category')}>
                        <h3>Danh mục tin tức</h3>
                        <Link to="/">Trang chủ</Link>
                        <Link to="/instruction">Giới thiệu</Link>
                        <Link to="/search?value=all">Sản phẩm</Link>
                        <Link to="/news" className={cx('active')}>
                            Tin tức
                        </Link>
                        <Link to="/contact">Liên hệ</Link>
                    </div>
                    <div className={cx('hightlight-news')}>
                        <h3>Tin tức nổi bật</h3>
                        {listNews.map((value, index) => (
                            <Link to={`/news/${index + 1}`} className={cx('hightlight-item')} key={index}>
                                <div className={cx('img')}>
                                    <img alt="" src={value.photoURL} />
                                </div>
                                <div className={cx('subject')}>{value.subject}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
