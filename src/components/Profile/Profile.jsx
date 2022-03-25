import '../../App.css';
import {useSelector} from 'react-redux'

export const Profile = () => {

    const user = useSelector((state) => state.user);

    let searchHistory = user.translations.map((translation) =>(
        <li key="{translation}">
            {translation}
        </li>
    ))

    return ( 
        <div>
            <h2 className="mb-3">History</h2>
            {user.username}
            <hr></hr>
            <ul>
            {
                searchHistory.length > 0 && {searchHistory}
            }
            </ul>

        </div> 
    );

}
 
export default Profile;