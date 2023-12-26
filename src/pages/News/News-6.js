import { AuthorIcon, DayIcon } from '~/assets/icon';
import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NewsSix() {
    return (
        <div className={cx('detail-news-item')}>
            <h2>Lợi thế của mỹ phẩm sinh học</h2>
            <div className={cx('day')}>
                <AuthorIcon /> Team Lofi <DayIcon />
                11 April, 2023
            </div>
            <p>
                Mỹ phẩm sinh học với chiết xuất từ thiên nhiên, ứng dụng công nghệ hiện đại, thân thiện với làn da, được
                nhiều thương hiệu mỹ phẩm đẩy mạnh phát triển.
            </p>
            <p>
                Dù rầm rộ hay âm thầm nhưng các "ông lớn" trên thị trường làm đẹp vẫn đang dốc lực nghiên cứu để đưa ra
                các dòng mỹ phẩm đáp ứng vấn đề cá nhân hóa, hiệu quả cũng như giảm thiếu sự kích ứng, dị ứng trên làn
                da. Trong đó, mỹ phẩm sinh học là một trong những loại mỹ phẩm được nhiều công ty lựa chọn đầu tư.
            </p>
            <p>Công nghệ sinh học và ngành mỹ phẩm sinh học</p>
            <img
                alt=""
                src="http://drbioherb.com/wp-content/uploads/2021/04/z2850699391697_7320b6041e8dca3d2b37e1f13258bf10.jpg"
            />
            <p>
                Ngành mỹ phẩm sinh học đã xuất hiện cách đây khá lâu và những năm gần đây được nhiều người quan tâm. Mỹ
                phẩm sinh học lan rộng từ Âu sang Á trong thị trường tiêu dùng mỹ phẩm khi những nghiên cứu về công nghệ
                và thành phần có tác dụng tích cực.
            </p>
            <p>
                Mỹ phẩm sinh học thường thành phần chiết xuất từ thiên nhiên, một số sản phẩm với khoảng 95 -100%
                organic theo tiêu chuẩn không GMO (thực vật biến đổi gen). Kết hợp cùng sức mạnh đến từ công nghệ sinh
                học, ngành mỹ phẩm sinh học tạo ra những dấu ấn. Gần đây nhất, công nghệ sinh học đã có nhiều đóng góp
                trong công cuộc sản xuất vaccine trong bối cảnh Covid-19.
            </p>
            <p>
                Ứng dụng công nghệ sinh học vào sản xuất mỹ phẩm giúp cho thành phần có trong mỹ phẩm không chỉ đơn
                thuần tác động trên bề mặt hay lớp thượng bì mà có thể đến trúng đích vùng da cần trị liệu. Công nghệ
                sinh học góp phần giúp một số thương hiệu mỹ phẩm sinh học cao cấp đem lại tác động tích cực trên làn
                da.
            </p>
            <p>Mỹ phẩm sinh học cao cấp Dr.Belter</p>
            <p>
                Xuất phát từ đất nước có ngành công nghệ sinh học phát triển, Dr.Belter - thương hiệu của Đức là tâm
                huyết nghiên cứu không ngừng của Tiến sĩ hóa sinh ngành Công nghệ sinh học - Clemens Belter.
            </p>
            <p>
                Quá trình hình thành và phát triển với khái niệm cốt lõi trong nghiên cứu và sản xuất "Vẻ đẹp tạo nên từ
                sự giao thoa của tự nhiên và công nghệ", Dr.Belter ghi dấu ấn thương hiệu tại hơn 50 quốc gia trên toàn
                cầu.
            </p>
            <p>
                Theo đại diện từ Dr.Belter, những sản phẩm của thương hiệu hướng đến tiêu chí 5 không gồm không chất nhũ
                hóa, không chất bảo quản, không dầu khoáng, không paraben, không màu và hương liệu tổng hợp. Bởi đây là
                những thành phần có khả năng gây kích ứng hay tác dụng phụ với làn da. 4 cam kết mà thương hiệu hướng
                đến gồm công nghệ sinh học tiên tiến, hiệu quả trị liệu tối ưu, nguyên liệu organic, thành phần mỹ phẩm
                hoạt chất cao.
            </p>
        </div>
    );
}

export default NewsSix;
