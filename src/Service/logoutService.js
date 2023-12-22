import { logoutFail, logoutStart, logoutSuccess } from '~/redux/actions';
import axiosInstance from '~/utills/httpRequest';

export const logoutService = async (path, user, dispatch, navigate) => {
    const httpRequest = axiosInstance(user, dispatch, logoutSuccess);
    dispatch(logoutStart());
    try {
        await httpRequest.post(
            path,
            { id: user._id },
            {
                headers: {
                    token: `Bearer ${user.accessToken}`,
                },
            },
        );
        dispatch(logoutSuccess());
        console.log('logout thanh cong');
        navigate('/login');
    } catch (err) {
        dispatch(logoutFail());
        console.log('logout that bat');
    }
};
