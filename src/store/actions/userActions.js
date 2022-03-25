export const ACTION_USER_SET = '[user] SET';
export const ACTION_USER_HISTORY_SET = '[user] HISTORY_SET'
export const ACTION_USER_HISTORY_CLEAR = '[user] HISTORY_CLEAR'

export const userSetAction = profile => ({
    type: ACTION_USER_SET,
    payload: profile
})

export const userSetHistoryAction = search => ({
    type: ACTION_USER_HISTORY_SET,
    payload: search
})

export const userClearHistoryAction = () => ({
    type: ACTION_USER_HISTORY_CLEAR
})