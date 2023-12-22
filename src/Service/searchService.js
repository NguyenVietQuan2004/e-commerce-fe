import axiosInstance from '~/utills/httpRequest';

export const searchService = async (path, option = {}) => {
    let httpRequest = axiosInstance();
    try {
        const res = await httpRequest.get(path, option);

        return res.data;
    } catch (err) {
        return [];
    }
};
