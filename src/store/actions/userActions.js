export const ACTION_USER_SET = '[user] SET';

export const userSetAction = profile => ({
    type: ACTION_USER_SET,
    payload: profile
})