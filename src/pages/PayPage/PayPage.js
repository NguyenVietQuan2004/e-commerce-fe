import { useSelector } from 'react-redux';
import styles from './PayPage.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '~/utills/httpRequest';
import PricetoString from '~/utills/PriceToString';
import { Dollar, DownIcon, UpIcon } from '~/assets/icon';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PayItem from './PayItem.js';
import ItemCountry from './ItemCountry';

const cx = classNames.bind(styles);

function PayPage() {
    const schema = yup.object().shape({
        email: yup.string().required('Email không được để trống'),
        fullname: yup.string().required('Vui lòng nhập họ tên'),
        locate: yup.string().required('ĐỊa chỉ không được để trống'),
    });
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // Sử dụng yupResolver để sử dụng schema validation
    });

    const [list, setList] = useState([]);
    const [listCountry, setListCountry] = useState([]);
    const [listCountryTemp, setListCountryTemp] = useState([]);
    const [showListCountry, setShowListCountry] = useState(false);
    const [isFormFull, setIsFormFull] = useState(false);

    const [photoSelectorCountry, setPhotoSelectorCountry] = useState('');
    const totalCart = useSelector((state) => state.totalCart);
    const user = useSelector((state) => state.login.currentUser);
    const httpRequest = axiosInstance();

    useEffect(() => {
        const fetchAPI = async () => {
            const keys = [];
            totalCart.IDListCartBuy.map((pro) => keys.push(Object.values(pro)[0]));
            const data = await httpRequest.get(
                `search?field=cart&limit=100&page=1`,
                {
                    params: {
                        value: keys,
                    },
                },
                {
                    headers: {
                        token: `Bearer ${user.accessToken}`,
                    },
                },
            );
            setList(data.data.products);
        };
        if (user) {
            fetchAPI();
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const countries = await httpRequest.get('https://restcountries.com/v3.1/all');
                setListCountry(countries.data);
                setListCountryTemp(countries.data);
                setPhotoSelectorCountry(countries.data[112].flags.svg);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
        // eslint-disable-next-line
    }, []);
    // submit
    const onSubmit = async (data) => {
        try {
            await httpRequest.post('/auth/notify', {
                params: {
                    email: data.email,
                    locate: data.locate,
                    name: data.fullname,
                    information: {
                        totalCart,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
        setIsFormFull(true);
    };
    const handleOnClickSelectorItem = useCallback((name) => {
        setPhotoSelectorCountry(name);
    }, []);
    const handleToggleListCountry = useCallback((value) => {
        setShowListCountry(value);
    }, []);
    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        if (value) {
            setListCountryTemp((pre) => {
                return listCountry.filter((country) => country.name.common.toLowerCase().includes(value.toLowerCase()));
            });
        }
    };
    useEffect(() => {
        window.scroll({
            top: 0,
        });
    }, []);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    {/* <div>
                        <img
                            alt=""
                            src="https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/logo.png?1700467467406"
                            style={{ width: '400px' }}
                        />
                    </div> */}
                    <div className={cx('content')}>
                        <div className={cx('info')}>
                            <div className={cx('header')}>
                                <h3>Thông tin nhận hàng</h3>
                            </div>

                            <div className={cx('container')}>
                                {/* Email */}
                                <div
                                    className={cx(
                                        'form-group',
                                        { 'has-value': !!watch('email') },
                                        { 'has-error': !!errors?.email?.message },
                                    )}
                                >
                                    <div className={cx('row')}>
                                        <input spellCheck={false} {...register('email')} id="email" type="email" />
                                        <div className={cx('sub-title')}>Email</div>
                                    </div>
                                    <p>{errors?.email?.message}</p>
                                </div>
                                {/* HỌ và tên */}
                                <div
                                    className={cx(
                                        'form-group',
                                        { 'has-value': !!watch('fullname') },
                                        { 'has-error': !!errors?.fullname?.message },
                                    )}
                                >
                                    <div className={cx('row')}>
                                        <input spellCheck={false} {...register('fullname')} id="fullname" />
                                        <div className={cx('sub-title')}>Họ và tên</div>
                                    </div>
                                    <p>{errors?.fullname?.message}</p>
                                </div>

                                {/* Số điẹn thoại */}
                                <div className={cx('form-group', { 'has-value': !!watch('phonenumber') })}>
                                    <div className={cx('row')}>
                                        <input spellCheck={false} {...register('phonenumber')} id="phonenumber" />
                                        <div className={cx('sub-title')}>Số điện thoại (tùy chọn)</div>
                                        <div style={{ position: 'relative' }}>
                                            <div
                                                onClick={() => handleToggleListCountry(!showListCountry)}
                                                className={cx('option-wrap')}
                                            >
                                                <div className={cx('option-img')}>
                                                    <img alt="" src={photoSelectorCountry} />
                                                </div>
                                                <div>{showListCountry ? <UpIcon /> : <DownIcon />}</div>
                                            </div>
                                            {showListCountry && (
                                                <div className={cx('list-country')}>
                                                    <div className={cx('search-country')}>
                                                        <input onChange={(e) => handleInputChange(e)} />
                                                    </div>
                                                    {listCountryTemp.map((value, index) => {
                                                        let arr = value?.idd?.suffixes || [];
                                                        if (!arr) {
                                                            arr.push('');
                                                        }
                                                        const phoneCode = value.idd.root + arr[0];
                                                        return (
                                                            <ItemCountry
                                                                key={value.name.common}
                                                                name={value.name.common}
                                                                phoneCode={phoneCode}
                                                                onClick={handleOnClickSelectorItem}
                                                                photoURL={value.flags.svg}
                                                                active={value.flags.svg === photoSelectorCountry}
                                                                onShow={handleToggleListCountry}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Địa chỉ */}
                                <div className={cx('form-group', { 'has-value': !!watch('locate') })}>
                                    <div className={cx('row')}>
                                        <textarea spellCheck={false} {...register('locate')} id="locate"></textarea>
                                        <div className={cx('sub-title')}>Địa chỉ</div>
                                    </div>
                                </div>

                                {/*Ghi chú*/}
                                <div className={cx('form-group', { 'has-value': !!watch('note') })}>
                                    <div className={cx('row')}>
                                        <textarea spellCheck={false} {...register('note')} id="note"></textarea>
                                        <div className={cx('sub-title')}>Ghi chú</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('deliver')}>
                            <div className={cx('header')}>
                                <h3>Vận chuyển</h3>
                            </div>
                            <div className={cx('row1', 'full-info')}>
                                {isFormFull ? (
                                    <>
                                        <input type="checkbox" readOnly={true} />
                                        <div>Giao hàng tận nơi</div>
                                        <div style={{ marginLeft: 'auto' }}>100.000</div>
                                    </>
                                ) : (
                                    <div className={cx('please')}>Vui lòng điền đẩy đủ thông tin</div>
                                )}
                            </div>
                            <div className={cx('header')}>
                                <h3>Thanh toán</h3>
                            </div>
                            <div className={cx('pay-form')}>
                                <div className={cx('head')}>
                                    <input type="checkbox" />
                                    <div>Thanh toán khi giao hàng (COD)</div>
                                    <div style={{ marginLeft: 'auto' }}>
                                        <Dollar />
                                    </div>
                                </div>
                                <div className={cx('foot')}>Bạn chỉ phải thanh toán khi nhận được hàng</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <h2>Đơn hàng ({totalCart.IDListCartBuy.length} sản phẩm)</h2>
                    <div style={{ paddingLeft: '28px' }}>
                        <div className={cx('list-pro')}>
                            {/* [ {id: dsdfd< price: jfndjf}] */}
                            {list.map((item) => {
                                const ObjectID = totalCart.IDListCartBuy.find((cart) => {
                                    return cart._id === item._id;
                                });
                                return (
                                    <PayItem
                                        photoURL={item.MainPhotoURL}
                                        name={item.name}
                                        key={item._id}
                                        _id={item._id}
                                        priceTotal={ObjectID.price}
                                        count={ObjectID.count}
                                    />
                                );
                            })}
                        </div>
                        <div className={cx('discount')}>
                            <div className={cx('discount-wrap')}>
                                <input placeholder="Nhập mã giảm giá" />
                                <button
                                    className={cx({
                                        disable: true,
                                    })}
                                    type="button"
                                >
                                    Áp dụng
                                </button>
                            </div>
                        </div>
                        <div className={cx('price-detail')}>
                            <div className={cx('detail')}>
                                <span>Tạm tính ({totalCart.IDListCartBuy.length} sản phẩm)</span>
                                <div>{PricetoString(totalCart.total)}</div>
                            </div>
                            <div className={cx('detail')}>
                                <span>Phí vận chuyển</span> <div>{PricetoString(100000)}</div>
                            </div>
                        </div>
                        <div className={cx('total')}>
                            <div className={cx('total-price')}>
                                <span>Tổng cộng</span> <div>{PricetoString(totalCart.total + 100000)}</div>
                            </div>
                            <div className={cx('back')}>
                                <Link to="/cart">Quay về giỏ hàng</Link>
                                <button type="submit">ĐẶT HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isFormFull && (
                <div className={cx('model')}>
                    <div className={cx('popup')}>
                        <h3>Trạng thái</h3>
                        <div>
                            Bạn đã đặt hàng thành công, chúng tôi đã gửi một email xác nhận. Vui lòng kiểm tra email.
                        </div>
                        <div className={cx('wrap-btn')}>
                            <button
                                onClick={() => {
                                    setIsFormFull(false);
                                    reset();
                                }}
                            >
                                Cancel
                            </button>
                            <Link to="/">Tiếp tục mua hàng</Link>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}

export default PayPage;
