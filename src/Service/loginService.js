import { loginFail, loginStart, loginSuccess } from '~/redux/actions';
import axiosInstance from '~/utills/httpRequest';

export const loginService = async (path, option, dispatch, navigate) => {
    let httpRequest = axiosInstance();

    dispatch(loginStart());
    try {
        const res = await httpRequest.post(path, option);
        dispatch(loginSuccess(res.data.user));

        navigate('/');
        return res.data;
    } catch (err) {
        dispatch(loginFail());
        navigate('/login');
    }
};
