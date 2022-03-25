import '../../App.css';
import {useSelector, useDispatch} from 'react-redux'
import {userClearHistoryAction} from '../../store/actions/userActions'
import HistoryList from './HistoryList'

export const Profile = () => {

    const {username, translations} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const tenSearches = translations.slice(0, 10);

    const clearHistory = () => (dispatch(userClearHistoryAction()))

    return ( 
        <div>
            <h4>User: {username}</h4>
            <h2 className="mb-3">My search history</h2>
            <hr></hr>
            <HistoryList items={tenSearches}/>
            <button onClick={clearHistory} className="btn btn-primary btn-lg">Clear history</button>
        </div> 
    );

}
 
export default Profile;