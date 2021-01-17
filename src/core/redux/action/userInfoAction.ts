import {USER_INFO_SET_DATA} from '../../constant/action';
import {UserInfo} from '../../interface/userInfo';

export const setUserInfo = (payload: UserInfo) => {
  return {
    type: USER_INFO_SET_DATA,
    payload,
  };
};
