import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function UpToFirstIcon() {
    const [hide, setHide] = useState(true);

    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY > 1300) {
                setHide(false);
            } else {
                setHide(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleOnScrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div
            className={cx('wrap-turn-up', {
                none: hide,
            })}
            onClick={handleOnScrollTop}
        >
            <div className={cx('up-icon')}>Up</div>
        </div>
    );
}

export default UpToFirstIcon;
