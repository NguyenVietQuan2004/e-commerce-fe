import Path from '~/components/Path';
import styles from './Instruction.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Instruction() {
    useEffect(() => {
        window.scroll({
            top: 0,
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Path pathList={['Giới thiệu']} />
            <div className={cx('content')}>
                <h2>Giới thiệu</h2>
                <p>
                    Lofi Cosmetic trực tiếp sản xuất các dòng mỹ phẩm thiên nhiên, công ty đi theo hướng phát triển bền
                    vững và lâu dài các dòng mỹ phẩm thiên nhiên an toàn cho da nhưng không kém phần hiệu quả. Hiện tại
                    Lofi Cosmetic có mạng lưới các nhà phân phối, đại lý bán lẻ các sản phẩm mỹ phẩm thiên nhiên phủ
                    rộng khắp Hà Nội và các tỉnh miền Bắc.
                </p>
                <p>
                    Với phương châm “Chất lượng thật - Giá trị thật”, chúng tôi tin rằng mình chính là chìa khóa giúp
                    kết nối con người đến gần hơn với các sản phẩm mỹ phẩm từ thiên nhiên.
                </p>
                <p>
                    <span style={{ fontWeight: '700' }}>Tầm nhìn:</span> Phấn đấu trở thành cửa hàng kinh doanh mỹ phẩm
                    100% thiên nhiên đảm bảo chất lượng, có kiểm nghiệm hiệu quả, đảm bảo an toàn tuyệt đối cho người sử
                    dụng.
                </p>
                <p>
                    <span style={{ fontWeight: '700' }}>Thế mạnh của chúng tôi:</span> những mặt hàng mỹ phẩm tại cửa
                    hàng luôn được kiểm duyệt chặt chẽ, luôn luôn tuân theo tiêu chí 100% chiết xuất thiên nhiên, an
                    toàn tuyệt đối cho người sử dụng. Những sản phẩm luôn đạt chuẩn chất lượng và là những sản phẩm có
                    nguồn gốc xuất xứ rõ ràng.
                </p>
                <p>
                    Mỹ phẩm từ thiên nhiên hay còn được gọi là mỹ phẩm hữu cơ với thành phần chính là những chiết xuất
                    từ những bộ phận của thực vật như hoa, quả, thân, lá cùng với những khoáng chất thiên nhiên để vừa
                    mang tính trị liệu, vừa nuôi dưỡng tế bào da.
                </p>
                <p>
                    Do được chiết xuất từ thiên nhiên nên những mỹ phẩm này rất an toàn cho da, kể cả những làn da cực
                    kỳ nhạy cảm. Nếu bạn là người có da nhạy cảm, hay bị kích ứng hoặc thường xuyên gặp các vấn đề về
                    da, hãy sử dụng những sản phẩm từ thiên nhiên với nhãn ghi trên vỏ hợp là hydro-allergenic (ít gây
                    kích ứng da) để chăm sóc cho da bạn nhé!
                </p>
            </div>
        </div>
    );
}

export default Instruction;
