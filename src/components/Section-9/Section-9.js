import classNames from 'classnames/bind';
import styles from './Section-9.module.scss';
import { AuthorIcon, DayIcon } from '~/assets/icon';

const cx = classNames.bind(styles);
export const listNews = [
    {
        photoURL:
            'https://bizweb.dktcdn.net/thumb/large/100/473/812/articles/ezgif-com-webp-to-jpg.jpg?v=1681183400170',
        subject: 'Top 3 cushion chống nắng HOT nhất 2018 bạn gái sành điệu không thể bỏ qua',
        dayUpdate: '11 April, 2023',
        description:
            'Ngoài sự tiện dụng chỉ sau vài phút là có một lớp trang điểm thật đẹp thì 3 loại cushion dưới đây còn chinh phục các cô nàng bởi chỉ số chống nắng vượt trội. Cushion là một sản phẩm rất đa năng, thực hiện được cả chức năng của: kem lót, kem nền, che khuyết điểm và cả kem chống nắng',
    },
    {
        photoURL:
            'https://bizweb.dktcdn.net/thumb/large/100/473/812/articles/ezgif-com-webp-to-jpg-1.jpg?v=1681183163600',
        subject: 'Blogger làm đẹp chỉ ra sai lầm dưỡng da của nhiều phụ nữ',
        dayUpdate: '28 February, 2023',
        description:
            'Theo Hannah Nguyễn, nhiều chị em dưỡng da chưa đúng cách, không tẩy tế bào chết, dùng serum làm sáng da và dễ mua nhầm hàng kém chất lượng.',
    },
    {
        photoURL:
            'https://bizweb.dktcdn.net/thumb/large/100/473/812/articles/marks-and-spencer-gift-sets-e07e0a62a82a4006992b9ec6662ec91c-1024x1024.jpg?v=1681183262793',
        subject: 'Xu hướng lông mày năm 2023 không thể không biết',
        dayUpdate: '30 March, 2023',
        description:
            'Nếu bạn đang có ý định làm đẹp đôi chân mày của mình nhưng không biết mẫu nào hót nhất trong năm nay thì hãy nhanh chóng tham khảo xu hướng lông mày năm 2018 đang lên ngôi dưới đây nhé.',
    },
    {
        photoURL:
            'https://bizweb.dktcdn.net/thumb/large/100/473/812/articles/ezgif-com-webp-to-jpg-1-6ae8c29d-c8f8-4c0a-99b6-35d996bd509b.jpg?v=1681182934443',
        subject: 'Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất',
        dayUpdate: '11 April, 2023',
        description:
            'Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi chưa hợp lí, lạm dụng mỹ phẩm quá nhiều. Chỉ với những nguyên liệu có sẵn trong tự nhiên như chanh, nghệ, mật ong… chị em sẽ có làn da sáng và sạch nám.',
    },
    {
        photoURL:
            'https://bizweb.dktcdn.net/thumb/large/100/473/812/articles/ezgif-com-webp-to-jpg-4.jpg?v=1681183111700',
        subject: 'Loạt sản phẩm giúp chị em chăm sóc làn da',
        dayUpdate: '07 February, 2023',
        description:
            'Serum Finava Premium chứa thành phần chính là Glutathion, nhau thai cừu, sữa ong chúa, tinh chất tế bào gốc NAG, có tác dụng hỗ trợ ngăn chặn và xóa gốc sạm, nám, tàn nhang, cho da trắng sáng. Sản phẩm cũng hỗ trợ tái sinh các vùng da bị tổn thương, tái tạo collagen, lấp đầy rãnh nhăn.',
    },
    {
        photoURL:
            'https://bizweb.dktcdn.net/thumb/large/100/473/812/articles/ezgif-com-webp-to-jpg-3.jpg?v=1681183139830',
        subject: 'Lợi thế của mỹ phẩm sinh học',
        dayUpdate: '12 November, 2022',
        description:
            'Mỹ phẩm sinh học với chiết xuất từ thiên nhiên, ứng dụng công nghệ hiện đại, thân thiện với làn da, được nhiều thương hiệu mỹ phẩm đẩy mạnh phát triển.',
    },
];
function SectionNine() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('news')}>
                <h2>Xu hướng làm đẹp</h2>
                <div className={cx('list-news')}>
                    {listNews.map((value, index) => (
                        <div
                            className={cx('news-item', {
                                none: index >= 4,
                            })}
                            key={index}
                        >
                            <div className={cx('img')}>
                                <img alt="" src={value.photoURL} />
                            </div>
                            <div className={cx('description')}>
                                <div className={cx('subject')}>{value.subject}</div>
                                <div className={cx('text')}>{value.description}</div>
                                <div className={cx('day')}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <AuthorIcon /> Team lofi
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <DayIcon /> {value.dayUpdate}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionNine;
