import { userActions, userReducer } from './model/slice/userSlice';
import type { UserSchema, User } from './model/types/user';
import { getUserAuthData } from './model/selectors/GetUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getUserAuthData,
};
