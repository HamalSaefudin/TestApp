import MMKVStorage from 'react-native-mmkv-storage';
import AuthenticationReducer from '@modules/Authentication/Store/AuthenticationReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import {
  persistStore as reduxPersistStore,
  persistReducer,
} from 'redux-persist';

const storage = new MMKVStorage.Loader().initialize();

export const reducer = combineReducers({
  auth: persistReducer({ key: 'auth', storage }, AuthenticationReducer),
});

export const store = createStore(reducer, applyMiddleware(logger));

export const persistStore = reduxPersistStore(store);
