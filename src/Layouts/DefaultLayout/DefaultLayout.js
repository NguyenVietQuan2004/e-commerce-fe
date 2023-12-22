import Header from '~/components/Header';
import Footer from '~/components/Footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { BellIcon } from '~/assets/icon';
import UpToFirstIcon from './UpToFirstIcon';
import { useState } from 'react';
import MenuContact from './MenuContact';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isShowContact, setIsShowContact] = useState('none');
    return (
        <div className={cx('wrapper')}>
            <div className="header">
                <Header />
            </div>

            <div className="content"> {children} </div>
            <div className="footer">
                <Footer />
            </div>

            <MenuContact />
            <div className={cx('wrap-bell-icon', 'wrap-contact-icon')}>
                <div className={cx('bell-icon', 'contact-icon')}>
                    <BellIcon />
                </div>
            </div>

            <UpToFirstIcon />
        </div>
    );
}

export default DefaultLayout;
