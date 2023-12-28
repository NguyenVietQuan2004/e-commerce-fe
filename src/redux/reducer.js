const initialState = {
    login: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    register: {
        isFetching: false,
        error: false,
        success: false,
    },
    cart: {
        listCart: {},
        isFetching: false,
        error: false,
    },
    totalCart: {
        IDListCartBuy: [],
        total: 0,
    },
    listBranchChecked: [],
    listPriceChecked: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loginStart':
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: true,
                },
            };
        case 'loginSuccess':
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    currentUser: action.payload,
                    error: false,
                },
            };
        case 'loginFail':
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    error: true,
                },
            };

        case 'setCancelErrorLogin':
            return {
                ...state,
                login: {
                    ...state.login,
                    error: false,
                },
            };
        case 'logoutStart':
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: true,
                },
            };
        case 'logoutSuccess':
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    currentUser: null,
                    error: false,
                },
                cart: {
                    ...state.cart,
                    listCart: {},
                    isFetching: false,
                    error: false,
                },
            };
        case 'logoutFail':
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    error: true,
                },
            };
        case 'setToken':
            return {
                ...state,
                login: {
                    ...state.login,
                    currentUser: {
                        ...state.login.currentUser,
                        accessToken: action.payload,
                    },
                },
            };
        case 'registerStart':
            return {
                ...state,
                register: {
                    ...state.register,
                    isFetching: true,
                },
            };
        case 'registerSuccess':
            return {
                ...state,
                register: {
                    ...state.register,
                    isFetching: false,
                    success: true,
                },
            };
        case 'registerFail':
            return {
                ...state,
                register: {
                    ...state.register,
                    isFetching: false,
                    error: true,
                },
            };
        case 'fetchCartStart':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    isFetching: true,
                },
            };
        case 'fetchCartSuccess':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    isFetching: false,
                    listCart: action.payload,
                },
            };
        case 'fetchCartFail':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    isFetching: false,
                    error: true,
                },
            };
        case 'addTotalCart':
            if (!action.payload.price) {
                return state;
            }
            let newLists = state.totalCart.IDListCartBuy.filter((cart) => {
                const id = Object.values(cart)[0];
                return id !== action.payload._id;
            });

            return {
                ...state,
                totalCart: {
                    IDListCartBuy: [...newLists, action.payload],
                    total: state.totalCart.total + action.payload.price,
                },
            };
        case 'deleteTotalCart':
            if (!action.payload.price) {
                return state;
            }
            const newListCartBuy = state.totalCart.IDListCartBuy.filter((cart) => {
                const id = Object.values(cart)[0];
                return id !== action.payload._id;
            });

            return {
                ...state,
                totalCart: {
                    IDListCartBuy: newListCartBuy,
                    total: state.totalCart.total - action.payload.price,
                },
            };
        case 'updateTotalCart':
            let pro = state.totalCart.IDListCartBuy.find((cart) => {
                const id = Object.values(cart)[0];
                return id === action.payload._id;
            });
            const oldTotal = state.totalCart.total - Object.values(pro)[1];
            let newList = state.totalCart.IDListCartBuy.filter((cart) => {
                const id = Object.values(cart)[0];
                return id !== action.payload._id;
            });
            const { query, ...order } = action.payload;
            if (action.payload.query === 'plus') {
                return {
                    ...state,
                    totalCart: {
                        IDListCartBuy: [...newList, order],
                        total: oldTotal + action.payload.price,
                    },
                };
            } else {
                return {
                    ...state,
                    totalCart: {
                        IDListCartBuy: [...newList, order],
                        total: oldTotal + action.payload.price,
                    },
                };
            }
        case 'addToListBranchChecked':
            const list = state.listBranchChecked.filter((item) => item !== action.payload);

            return {
                ...state,
                listBranchChecked: [...list, action.payload],
            };
        case 'deleteToListBranchChecked':
            const newListBranch = state.listBranchChecked.filter((item) => item !== action.payload);
            return {
                ...state,
                listBranchChecked: newListBranch,
            };
        case 'addToListPriceChecked':
            const lists = state.listPriceChecked.filter((item) => item !== action.payload);
            return {
                ...state,
                listPriceChecked: [...lists, action.payload],
            };

        case 'deleteToListPriceChecked':
            const newListBranchs = state.listPriceChecked.filter((item) => item !== action.payload);
            return {
                ...state,
                listPriceChecked: newListBranchs,
            };
        case 'clearQuery':
            return {
                ...state,
                listPriceChecked: [],
                listBranchChecked: [],
            };
        default:
            return state;
    }
};

export default rootReducer;
