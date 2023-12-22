import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import jwt_decode from 'jwt-decode';

import styles from './Login.module.scss';
import axiosInstance from '~/utills/httpRequest';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ForgotPassword() {
    var url = new URL(window.location.href);
    const httpRequest = axiosInstance();
    const [isSendSuccess, setIsSendSuccess] = useState(false);
    const [isForgotSuccess, setIsForgotSuccess] = useState(false);
    const [isError, setIsError] = useState('');

    const token = url.searchParams.get('code');
    const email = url.searchParams.get('email');

    let tokenDecode;
    if (token) {
        tokenDecode = jwt_decode(token);
    }
    const date = new Date();
    const schema = yup.object().shape({
        email: yup.string().required('Mật khẩu không được để trống'),
    });
    const {
        register,
        formState: { errors },
        getValues,
    } = useForm({
        resolver: yupResolver(schema), // Sử dụng yupResolver để sử dụng schema validation
    });

    const onSubmit = async (data) => {
        console.log(getValues());
        const value = getValues();
        try {
            if (value?.email?.trim()) {
                await httpRequest.post('/auth/forgot', {
                    params: {
                        email: value.email,
                    },
                });

                setIsSendSuccess(true);
            } else {
                await httpRequest.post('/auth/forgotCode', {
                    params: {
                        password: value.password,
                        token,
                        email,
                    },
                });
                setIsForgotSuccess(true);
            }
        } catch (error) {
            setIsError(() => {
                if (error.response.status === 400) {
                    return 'Không tìm thấy người dùng';
                }
                return 'Lỗi server, vui lòng thử lại sau!';
            });
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    {!token ? (
                        <>
                            {!isSendSuccess ? (
                                <>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            {...register('email')}
                                            id="email"
                                            placeholder="Nhập email"
                                            type="email"
                                        />
                                        <p>{errors?.email?.message}</p>
                                    </div>
                                    <div style={{ margin: '2px 0 6px 0', color: '#c23527' }}>{isError}</div>
                                    <button className={cx('btn-submit')} type="submit" onClick={onSubmit}>
                                        Xác nhận
                                    </button>
                                </>
                            ) : (
                                <div className={cx('message')}>
                                    Đã gửi thông tin xác nhận. Vui lòng kiểm tra hợp thư trong email của bạn
                                </div>
                            )}
                        </>
                    ) : tokenDecode.exp >= date.getTime() / 1000 ? (
                        !isForgotSuccess ? (
                            <>
                                <div className={cx('form-group')}>
                                    <label htmlFor="password">Nhập mật khẩu mới</label>
                                    <input {...register('password')} id="password" placeholder="Nhập mật khẩu" />
                                    <p>{errors?.password?.message}</p>
                                </div>

                                <div className={cx('form-group')}>
                                    <label htmlFor="passwordconfirm">Nhập lại mật khẩu mới</label>
                                    <input
                                        {...register('passwordconfirm')}
                                        id="passwordconfirm"
                                        placeholder="Nhập lại mật khẩu"
                                    />
                                    <p>{errors?.userName?.message}</p>
                                </div>
                                <button className={cx('btn-submit')} type="submit" onClick={onSubmit}>
                                    Đồng ý
                                </button>
                            </>
                        ) : (
                            <div className={cx('message')}>Đã đổi mk thành công</div>
                        )
                    ) : (
                        <div>Link đã hết hạn</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
