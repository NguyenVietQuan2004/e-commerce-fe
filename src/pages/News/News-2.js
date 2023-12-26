import { AuthorIcon, DayIcon } from '~/assets/icon';
import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NewsTwo() {
    return (
        <div className={cx('detail-news-item')}>
            <h2>Blogger làm đẹp chỉ ra sai lầm dưỡng da của nhiều phụ nữ</h2>
            <div className={cx('day')}>
                <AuthorIcon /> Team Lofi <DayIcon />
                28 February, 2023
            </div>
            <img
                alt=""
                src="https://img4.thuthuatphanmem.vn/uploads/2020/12/25/bo-my-pham-dior-cuc-dep_094455072.jpg"
            />
            <p>
                Theo Hannah Nguyễn, nhiều chị em dưỡng da chưa đúng cách, không tẩy tế bào chết, dùng serum làm sáng da
                và dễ mua nhầm hàng kém chất lượng.
            </p>
            <p>
                Tốt nghiệp ngành Marketing tại Mỹ, nhiều năm điều hành các thương hiệu mỹ phẩm quốc tế giúp Hannah
                Nguyễn có sự am hiểu về thị trường làm đẹp. Cô được nhiều chị em biết đến với những chia sẻ kinh nghiệm
                làm đẹp thông qua mạng xã hội.
            </p>

            <p>
                Trước khi tốt nghiệp đại học, Hannah từng có bằng làm đẹp Cosmetology ở xứ sở cờ hoa, gặp gỡ nhiều
                chuyên gia trang điểm nổi tiếng thế giới... Khi trở về Việt Nam, cô kỳ vọng mang kiến thức, kinh nghiệm
                góp phần giúp chị em trở nên xinh đẹp, tự tin hơn.
            </p>

            <p>
                Những lần tham gia sự kiện truyền cảm hứng cho phụ nữ, tư vấn chăm sóc da, cô nhận thấy, nhiều phụ nữ
                Việt chưa dưỡng da đúng cách - điều mà cô cho rằng rất căn bản như đánh răng, tắm gội hàng ngày.
            </p>

            <p>Dưỡng da sai cách, chưa chú trọng trang điểm</p>

            <p>
                Không ít chị em chưa chú trọng dưỡng ẩm cho da, tẩy tế bào chết, làm sáng da, nhất là sau tuổi 30.
                Hannah khuyên phái nữ muốn có làn da sáng khỏe cần làm sạch da đúng cách theo các bước, cung cấp ẩm, tẩy
                tế bào chết một tuần 2 lần, thoa serum làm sáng da, chống lão hóa; ban ngày lưu ý thoa kem chống nắng
                thường xuyên.
            </p>

            <p>
                "Một số người cho rằng trang điểm hại da, số khác nghĩ còn trẻ nên chẳng chăm sóc da nên để tự nhiên,
                khi có tuổi mới nên chăm chút. Song theo tôi, trang điểm có thể bảo vệ da, chỉ có hại khi thực hiện sai
                cách. Bằng chứng là tôi đã trang điểm từ năm 14 tuổi nhưng đến nay làn da vẫn khỏe, nhận không ít lời
                khen", cô nói.
            </p>

            <p>
                Hannah Nguyễn cho biết thêm, sản phẩm tẩy tế bào chết, kem chống nắng, dưỡng da... không phải hàng xa xỉ
                mà chị em nào cũng nên có trong túi xách. Không chăm sóc mà muốn da đẹp rất khó, khi ngày càng có nhiều
                tác nhân gây hại như khói bụi, ô nhiễm, ánh nắng mặt trời... Làn da cần được tái tạo mỗi ngày.
            </p>

            <p>
                Nhận thấy nhiều phụ nữ Việt thiếu thông tin làm đẹp, cô lập ra trang fanpage chia sẻ kiến thức dễ hiểu,
                đơn giản cho mọi người có thể đọc, áp dụng được ngay. Đến nay, Hannah có gần 600.000 người theo dõi trên
                mạng xã hội. Cô cho rằng đó là nhờ nền tảng kiến thức trong ngành, sự trung thực và uy tín trong các
                chia sẻ.
            </p>
        </div>
    );
}

export default NewsTwo;
