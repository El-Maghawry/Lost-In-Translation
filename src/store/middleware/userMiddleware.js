import {ACTION_USER_TRANSLATIONS_SET, ACTION_USER_HISTORY_CLEAR, userSetAction, userSetTranslationsAction } from '../actions/userActions'
import {TranslationApi} from '../../components/Translation/TranslationApi'


export const userMiddleware = ({dispatch}) => next => action => {
    next(action)

    if(action.type === ACTION_USER_TRANSLATIONS_SET){
        TranslationApi.updateUser(action.payload)
        .then(user => (dispatch(userSetAction(user))))
    }

}