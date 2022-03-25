import '../../App.css';
import {useSelector, useDispatch} from 'react-redux'
import {userClearHistoryAction, userSetTranslationsAction} from '../../store/actions/userActions'
import HistoryList from './HistoryList'

export const Profile = () => {

    const {id, username, translations} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let user = {id: id, translations: []}

    const tenSearches = translations.slice(0, 10);

    function clearHistory (){
        dispatch(userClearHistoryAction())
        dispatch(userSetTranslationsAction(user))
    }
        

    return ( 
        <div>
            <h4>User: {username}</h4>
            <h2 className="mb-3">My search history</h2>
            <hr></hr>
            <HistoryList items={tenSearches}/>
            {translations.length > 0 &&  <button onClick={clearHistory} className="btn btn-primary btn-lg">Clear history</button>}
           
        </div> 
    );

}
 
export default Profile;