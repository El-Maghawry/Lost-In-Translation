export const ACTION_SESSION_SET = '[session] SET'
export const ACTION_SESSION_INIT = '[session] INIT'
export const ACTION_SESSION_DELETE = '[session] DELETE'


export const sessionSetAction = profile =>({
    type: ACTION_SESSION_SET,
    payload: profile
})

export const sessionInitAction = () =>({
    type: ACTION_SESSION_INIT
})

export const sessionDeleteAction = () =>({
    type: ACTION_SESSION_DELETE
})