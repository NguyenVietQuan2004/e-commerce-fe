import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './Login.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerService } from '~/Service/registerService';
import Path from '~/components/Path';

const cx = classNames.bind(styles);

function Register() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        userName: yup
            .string()
            .required('Tên không được để trống')
            .min(5, 'Tên phải có ít nhất 5 ký tự')
            .max(30, 'Tên chỉ tối đa 30 kí tự'),
        password: yup.string().required('Mật khẩu không được để trống').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
        photoURL: yup.string(),
        email: yup.string().required('Email không được để trống'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // Sử dụng yupResolver để sử dụng schema validation
    });

    const onSubmit = async (data) => {
        registerService(
            'auth/register',
            {
                userName: data.userName,
                password: data.password,
                photoURL: data.photoURL,
                cart: [],
                loved: [],
                role: 1,
            },
            dispatch,
            navigate,
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className="path">
                <Path pathList={['Đăng ký']} />
            </div>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <Link
                        to="/login"
                        className={cx('login', {
                            [styles.active]: pathname === '/login',
                        })}
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        to="/register"
                        className={cx('register', {
                            [styles.active]: pathname === '/register',
                        })}
                    >
                        Đăng ký
                    </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('container')}>
                        <div className={cx('form-group')}>
                            <label htmlFor="username">Tên đăng nhập*</label>
                            <input {...register('userName')} id="username" placeholder="Nhập tên đăng nhập" />
                            <p>{errors?.userName?.message}</p>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="email">Email*</label>
                            <input {...register('email')} id="email" placeholder="Nhập email" />
                            <p>{errors?.email?.message}</p>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password">Mật khẩu*</label>
                            <input {...register('password')} id="password" placeholder="Nhập mật khẩu" />
                            <p>{errors?.password?.message}</p>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="photoURL">PhotoURL</label>
                            <input {...register('photoURL')} id="photoURL" placeholder="Nhập hình ảnh đại diện" />
                            <p>{errors?.photoURL?.message}</p>
                        </div>

                        <div className={cx('forgot-password')}>Quên mật khẩu?</div>
                    </div>

                    <button className={cx('btn-submit')} type="submit">
                        Đăng ký
                    </button>
                </form>
                <span>
                    Lofi Cosmetic cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng
                    ý của bạn.
                </span>
                {/* <div className={cx('line-break')}>
                    <span>hoặc đăng nhập qua</span>
                </div> */}
            </div>
        </div>
    );
}

export default Register;
