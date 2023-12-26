import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setToken } from '~/redux/actions';

const refreshAPI = async () => {
    try {
        const res = await axios.post(
            'https://lofi-cosmetic.onrender.com/auth/refresh',
            {},
            {
                withCredentials: true,
            },
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const axiosInstance = (user = null, dispatch) => {
    const httpRequest = axios.create({
        baseURL: 'https://lofi-cosmetic.onrender.com/',
        withCredentials: true,
    });

    httpRequest.interceptors.request.use(
        async function (config) {
            if (user) {
                const date = new Date();
                const tokenDecode = jwt_decode(user.accessToken);
                if (tokenDecode && tokenDecode.exp < date.getTime() / 1000) {
                    const res = await refreshAPI();
                    if (res) {
                        dispatch(setToken(res.accessToken));
                        config.headers['token'] = 'Bearer ' + res.accessToken;
                    }
                }
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );

    httpRequest.interceptors.response.use(function (response) {
        return response;
    });
    return httpRequest;
};
export default axiosInstance;
