import FooterMiddle from '~/components/Footer/FooterMiddle';
import Path from '~/components/Path';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const cx = classNames.bind(styles);

function Contact() {
    const schema = yup.object().shape({
        userName: yup.string().required('Tên không được để trống'),
        email: yup.string().required('Email không hợp lệ'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // Sử dụng yupResolver để sử dụng schema validation
    });

    const onsubmit = (data) => {
        console.log(data);
    };
    return (
        <div className={cx('wrapper')}>
            <Path pathList={['Liên hệ']} />
            <div className={cx('contact')}>
                <FooterMiddle />
            </div>
            <div className={cx('form-contact')}>
                <div className={cx('wrap-map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.17850609933424!2d105.61921119820876!3d10.109200826165821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a084e0f2ae6fc1%3A0x2f0772fa546889f4!2zQ8O0bmcgVmnDqm4gQ2jDonUgVsSDbiBMacOqbQ!5e0!3m2!1svi!2s!4v1702958999635!5m2!1svi!2s"
                        className={cx('map')}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </div>
                <div className={cx('wrap-form')}>
                    <h3>LIÊN HỆ CHÚNG TÔI</h3>
                    <div style={{ margin: '0 0 30px 0' }}>
                        Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ liên lạc với bạn trong thời
                        gian sớm nhất
                    </div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className={cx('form-group')}>
                            <input {...register('userName')} placeholder="Họ và tên*" />
                            <p>{errors?.userName?.message}</p>
                        </div>
                        <div className={cx('form-group')}>
                            <input {...register('email')} placeholder="Email*" type="email" />
                            <p>{errors?.email?.message}</p>
                        </div>
                        <div className={cx('form-group')}>
                            <input {...register('phonenumber')} placeholder="Số điện thoại" />
                            <p>{errors?.phonenumber?.message}</p>
                        </div>
                        <div className={cx('form-group')}>
                            <textarea rows={4} {...register('note')} placeholder="Ghi chú"></textarea>
                            <p>{errors?.note?.message}</p>
                        </div>
                        <button type="submit">Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
