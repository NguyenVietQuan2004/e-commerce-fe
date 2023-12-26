import { AuthorIcon, DayIcon } from '~/assets/icon';
import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NewsFour() {
    return (
        <div className={cx('detail-news-item')}>
            <h2>Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất</h2>
            <div className={cx('day')}>
                <AuthorIcon /> Team Lofi <DayIcon />
                11 April, 2023
            </div>
            <p>
                Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                chưa hợp lí, lạm dụng mỹ phẩm quá nhiều. Chỉ với những nguyên liệu có sẵn trong tự nhiên như chanh,
                nghệ, mật ong… chị em sẽ có làn da sáng và sạch nám.
            </p>
            <p className={cx('title')}>1. Mặt nạ chuối:</p>
            <img alt="" src="https://i.pinimg.com/736x/89/64/73/896473c6a3f1ff28316b4c8c1bfb0c29.jpg" />

            <p>Nguyên liệu:</p>
            <ul>
                <li>Chuối</li>
                <li>Sữa chua</li>
            </ul>
            <p>Cách thực hiện:</p>
            <ul>
                <li>Lấy 1 quả chuối chín, nghiền nhuyễn</li>
                <li>Trộn với 1 hộp sữa chua</li>
                <li>Lấy hỗn hợp thu được đắp mặt</li>
                <li>Để khoảng 15 – 20 phút và rửa sạch mặt bằng nước lạnh</li>
            </ul>
            <p>Công dụng:</p>

            <p>
                Chuối có khả năng trị nám là do chứa nhiều thành phần dưỡng chất tốt cho da như: vitamin A, B, C, E… và
                các khoáng chất thiết yếu. Giúp giảm sự hình thành sắc tố melanin, hơn nữa, chuối còn có tác dụng duy
                trì độ đàn hồi, bảo vệ da chống lão hóa và giảm nếp nhăn.
            </p>

            <p>Lưu ý:</p>

            <p>
                Trước khi đắp mặt nạ chị em nên rửa mặt bằng nước ấm, sau khi gỡ mặt nạ thì rửa sạch với nước lạnh. Sau
                mỗi lần đắp mặt nạ chị em nên dùng kem dưỡng ẩm vì thường sau khi mình đắp mặt nạ, mặt mình thường căng
                bóng dễ bị khô da.
            </p>

            <p className={cx('title')}>2. Nước vo gạo:</p>
            <p>Nguyên liệu:</p>
            <ul>
                <li>Nước vo gạo</li>
            </ul>
            <p>Cách thực hiện:</p>
            <ul>
                <li>Khi vo gạo, nước thứ nhất bạn đổ đi để loại bỏ bụi bẩn trong gạo</li>
                <li>Nước thứ 2 bạn gạn lại để rửa mặt như bình thường</li>

                <li>Sau khi rửa vỗ nhẹ da mặt cho đến khi khô.</li>

                <li>Sau 15 phút rữa sạch mặt lại lần nữa bằng nước lạnh.</li>
            </ul>
            <p>Công dụng:</p>

            <p>
                Nước vo gạo có chứa nhiều vitamin và các khoáng chất như sắt, đồng… rất có lợi cho da. Ngoài ra, thành
                phần vitamin B5 trong nước vo gạo có tác dụng dưỡng ẩm và sáng da, giúp ngăn chặn sự lão hóa, ngăn ngừa
                hình thành nám da.
            </p>

            <p>Lưu ý:</p>

            <p>
                Sau khi đắp mặt nạ trị nám bằng nước vo gạo, chị em cần phải chống nắng cho da khi ra ngoài như đội nón
                rộng vành, mặc áo dài tay, đeo bao tay và bôi kem chống nắng.
            </p>

            <img alt="" src="https://thammylinhanh.vn/wp-content/uploads/2022/09/cach-tri-nam-bang-ca-chua.jpg" />
            <p className={cx('title')}>3. Cà chua:</p>

            <p>Nguyên liệu:</p>
            <ul>
                <li>Cà chua</li>
            </ul>
            <p>Cách thực hiện:</p>
            <ul>
                <li> Lấy 1 quả cà chua chín, rửa sạch, để vào tủ lạnh khoảng một giờ.</li>
                <li>Cắt lát mỏng, đắp lên mặt và thư giãn khoảng 30 phút.</li>
            </ul>
            <p>Công dụng:</p>
            <p>
                Cà chua sẽ giúp tái tạo hồng cầu, duy trì sự đàn hồi của da và thành mạch máu và giúp chị em có làn da
                trắng mịn ngăn ngừa da nám.
            </p>

            <p>Lưu ý: Cần tránh ra nắng sau khi đắp mặt nạ cà chua vì lúc này da rất dễ bị bắt nắng.</p>

            <p>
                Bên cạnh sử dụng những cách trên chị em cần có chế độ ăn hợp lí, thường xuyên làm sạch da và sử dụng
                thêm một số loại kem trị nám để đạt được hiệu quả tốt nhất. Vậy thì sản phẩm nào vừa tốt lại an toàn cho
                da?
            </p>

            <p>
                Với công thức Gold Nano có trong hợp chất thông minh To be Fabulous giúp làm giảm sự xuất hiện các hắc
                sắc tố trên da . Với các hoạt tính cơ bản giàu polypeptide và các protein, cùng với chiết xuất từ dâu
                tằm sẽ mang lại hiệu quả thực sự giúp da trắng mịn và giảm sự xuất hiện của sạm nám.
            </p>

            <p>
                Sản phẩm hợp chất thông minh điều trị nám và chống lão hóa da Tobe Fabulous có thể được sử dụng trên mặt
                và cơ thể cho những vùng da tăng sắc tố, da không đều màu, những đốm nám, đốm nắng, tàn nhang ,…
            </p>

            <p>
                Thành phần Tobe Fabulous giàu chất polypeptide cùng với thành phần làm dịu da nhạy cảm hoàn hảo sẽ nhanh
                chóng thay thế và bổ sung lượng dưỡng chất cần thiết cho da đang và đã bị lão hóa.
            </p>

            <p>
                Ngoài ra nếu da chuyển biến chậm hoặc để rõ hơn tình trạng da hiện tại của mình chị em có thể tìm đến sự
                tư vấn của bác sĩ để có những liệu trình phù hợp với làn da của mình.
            </p>

            <p>
                Hy vọng những thông tin trên có thể giúp chị em cải thiện làn da của mình trở nên trắng mịn và sạch nám.
            </p>
        </div>
    );
}

export default NewsFour;
