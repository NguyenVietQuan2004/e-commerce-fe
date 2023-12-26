import Slide from '~/components/Slide';
import FlashSale from '~/components/FlashSale';
import SectionTwo from '~/components/Section-2';
import SectionThree from '~/components/Section-3';

import styles from './home.module.scss';
import classNames from 'classnames/bind';
import SectionSix from '~/components/Section-6';
import SectionEight from '~/components/Section-8';
import SectionNine from '~/components/Section-9';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('section-1')}>
                <Slide />
            </div>
            <div className={cx('section-2')}>
                <SectionTwo />
            </div>
            <div className={cx('section-3')}>
                <SectionThree />
            </div>
            <div className={cx('section-4')}>
                <FlashSale countTime={true} content="Trending Today" Subject="salePercent" limit={6} />
            </div>

            <div className={cx('section-5')}>
                <div className={cx('img')}>
                    <img
                        alt=""
                        src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/banner-mid.jpg?1691743854548"
                    />
                </div>
            </div>
            <div className={cx('section-6')}>
                <SectionSix />
            </div>
            <div className={cx('section-7')}>
                <FlashSale content="Sản Phẩm Mới" Subject="isnew" limit={10} />
            </div>
            <div className={cx('section-8')}>
                <SectionEight />
            </div>
            <div className={cx('section-9')}>
                <SectionNine />
            </div>
            <div className={cx('registor-notify')}>
                <h2>Đăng ký nhận tin</h2>
                <div>
                    <input placeholder="Nhập email của bạn" />
                    <button>Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
