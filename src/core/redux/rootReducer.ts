import {combineReducers} from 'redux';
import {userInfoReducer} from './reducer/userInfoReducer';

export const rootReducer = combineReducers({userInfo: userInfoReducer});

export type IState = ReturnType<typeof rootReducer>;
