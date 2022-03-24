export const ACTION_SESSION_SET = '[session] SET'

export const sessionSetAction = profile =>({
    type: ACTION_SESSION_SET,
    payload: profile
})