import styles from './News.module.scss';
import { listNews } from '~/components/Section-9/Section-9';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NewsZero() {
    return (
        <div className={cx('list-news')}>
            {listNews.map((value, index) => {
                return (
                    <Link to={`/news/${index + 1}`} className={cx('col')} key={index}>
                        <div className={cx('news-item')}>
                            <div className={cx('img')}>
                                <img alt="" src={value.photoURL} />
                            </div>
                            <div className={cx('subject')}>{value.subject}</div>
                            <div className={cx('description')}>{value.description}</div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default NewsZero;
