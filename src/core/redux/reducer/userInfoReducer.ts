import {USER_INFO_SET_DATA} from '../../constant/action';
import {IAction} from '../../interface/action';
import {UserInfo} from '../../interface/userInfo';

const initState: UserInfo = {
  name: 'Bạn',
};

export const userInfoReducer = (
  state: UserInfo = initState,
  action: IAction<UserInfo>,
) => {
  switch (action.type) {
    case USER_INFO_SET_DATA:
      return action.payload;
    default:
      return state;
  }
};
