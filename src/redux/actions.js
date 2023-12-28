import axiosInstance from '~/utills/httpRequest';

export const loginStart = (payload, type = 'loginStart') => {
    return {
        type,
        payload,
    };
};
export const loginSuccess = (payload, type = 'loginSuccess') => {
    return {
        type,
        payload,
    };
};
export const loginFail = (payload, type = 'loginFail') => {
    return {
        type,
        payload,
    };
};
export const logoutStart = (payload, type = 'logoutStart') => {
    return {
        type,
        payload,
    };
};
export const logoutSuccess = (payload, type = 'logoutSuccess') => {
    return {
        type,
        payload,
    };
};
export const setCancelErrorLogin = (payload, type = 'setCancelErrorLogin') => {
    return {
        type,
        payload,
    };
};

export const logoutFail = (payload, type = 'logoutFail') => {
    return {
        type,
        payload,
    };
};
export const registerStart = (payload, type = 'registerStart') => {
    return {
        type,
        payload,
    };
};
export const registerSuccess = (payload, type = 'registerSuccess') => {
    return {
        type,
        payload,
    };
};
export const registerFail = (payload, type = 'registerFail') => {
    return {
        type,
        payload,
    };
};

export const fetchCartStart = (payload, type = 'fetchCartStart') => {
    return {
        type,
        payload,
    };
};
export const fetchCartSuccess = (payload, type = 'fetchCartSuccess') => {
    return {
        type,
        payload,
    };
};
export const fetchCartFail = (payload, type = 'fetchCartFail') => {
    return {
        type,
        payload,
    };
};
export const addTotalCart = (_id, cost, count, type = 'addTotalCart') => {
    const payload = {
        _id,
        price: cost * count,
        count,
    };
    return {
        type,
        payload,
    };
};
export const deleteTotalCart = (_id, cost, count, type = 'deleteTotalCart') => {
    const payload = {
        _id,
        price: cost * count,
        count,
    };
    return {
        type,
        payload,
    };
};
export const updateTotalCart = (_id, cost, count, query, type = 'updateTotalCart') => {
    const payload = {
        _id,
        price: cost * count,
        count,
        query,
    };
    return {
        type,
        payload,
    };
};
export const addToBranchChecked = (payload, type = 'addToListBranchChecked') => {
    return {
        type,
        payload,
    };
};
export const deleteToBranchChecked = (payload, type = 'deleteToListBranchChecked') => {
    return {
        type,
        payload,
    };
};
export const addToPriceChecked = (payload, type = 'addToListPriceChecked') => {
    return {
        type,
        payload,
    };
};
export const deleteToPriceChecked = (payload, type = 'deleteToListPriceChecked') => {
    return {
        type,
        payload,
    };
};
export const clearQuery = (payload, type = 'clearQuery') => {
    return {
        type,
        payload,
    };
};
export const setToken = (payload, type = 'setToken') => {
    return {
        type,
        payload,
    };
};

// thunk action
export const fetchCartThunk = () => {
    return async function (dispatch, getState) {
        dispatch(fetchCartStart());
        const currentState = getState();
        const httpRequest = axiosInstance();
        const keys = [];

        currentState.login.currentUser.cart.map((pro) => keys.push(Object.keys(pro)[0]));

        try {
            const data = await httpRequest.get(`search?field=cart&limit=3&page=1`, {
                params: {
                    value: keys,
                },
            });
            dispatch(fetchCartSuccess(data.data));
        } catch (error) {
            dispatch(fetchCartFail());
        }
    };
};

export const updateCart = (IDProduct, query, number, option = 'NaN') => {
    return async function (dispatch, getState) {
        const currentState = getState();
        const pro = currentState.login.currentUser.cart.find((idPro) => Object.keys(idPro)[0] === IDProduct);
        const httpRequest = axiosInstance(currentState.login.currentUser, dispatch);
        let condition;
        if (pro) {
            condition = {
                query,
                IDProduct,
                number: number || pro[IDProduct] + 1,
                option: option,
            };
        } else {
            condition = {
                query,
                IDProduct,
                number: number || 1,
                option: option,
            };
        }
        try {
            const data = await httpRequest.post(
                'auth/update/cart',
                {
                    params: condition,
                },
                {
                    headers: {
                        token: `Bearer ${currentState.login.currentUser.accessToken}`,
                    },
                },
            );
            dispatch(loginSuccess({ ...data.data, accessToken: currentState.login.currentUser.accessToken }));
        } catch (error) {
            console.log(error);
        }
    };
};
