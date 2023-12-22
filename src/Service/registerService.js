import { registerFail, registerStart, registerSuccess } from '~/redux/actions';
import axiosInstance from '~/utills/httpRequest';

export const registerService = async (path, option, dispatch, navigate) => {
    let httpRequest = axiosInstance();
    dispatch(registerStart());

    try {
        await httpRequest.post(path, option);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (err) {
        dispatch(registerFail());
    }
};
