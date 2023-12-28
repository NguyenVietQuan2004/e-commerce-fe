import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './Login.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginService } from '~/Service/loginService';
import { useDispatch, useSelector } from 'react-redux';
import Path from '~/components/Path';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector((state) => state.login.currentUser);
    const errorLogin = useSelector((state) => state.login.error);
    const schema = yup.object().shape({
        userName: yup.string().required('Tên không được để trống'),
        password: yup.string().required('Mật khẩu không được để trống'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema), // Sử dụng yupResolver để sử dụng schema validation
    });
    useEffect(() => {
        window.scroll({
            top: 0,
        });
        reset();
    }, []);

    // useEffect(() => {
    //     if (user) {
    //         navigate(-1);
    //     }
    // }, [user, pathname, navigate]);
    const onSubmit = async (data) => {
        loginService(
            'auth/login',
            {
                params: {
                    userName: data.userName,
                    password: data.password,
                },
            },
            dispatch,
            navigate,
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className="path">
                <Path pathList={['Đăng nhập']} />
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
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input {...register('userName')} id="username" placeholder="Nhập tên đăng nhập" />
                            <p>{errors?.userName?.message}</p>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="password">Mật khẩu</label>
                            <input {...register('password')} id="password" placeholder="Nhập mật khẩu" />
                            <p>{errors?.password?.message}</p>
                        </div>
                        {errorLogin && <div className={cx('error')}>Tên tài khoản hoặc mật khẩu không chính xác</div>}
                        <Link to="/forgot" className={cx('forgot-password')}>
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <button className={cx('btn-submit')} type="submit">
                        Đăng nhập
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

export default Login;
