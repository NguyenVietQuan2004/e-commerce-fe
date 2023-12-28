import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
