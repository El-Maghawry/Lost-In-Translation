export const ACTION_USER_SET = '[user] SET'
export const ACTION_USER_TRANSLATIONS_SET = '[user] TRANSLATIONS_SET'
export const ACTION_USER_HISTORY_CLEAR = '[user] HISTORY_CLEAR'


export const userSetAction = (profile) => ({
    type: ACTION_USER_SET,
    payload: profile
})

export const userSetTranslationsAction = (user) => ({
    type: ACTION_USER_TRANSLATIONS_SET,
    payload: user
})

export const userClearHistoryAction = () => ({
    type: ACTION_USER_HISTORY_CLEAR
})