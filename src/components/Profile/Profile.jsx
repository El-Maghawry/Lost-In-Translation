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
            <h2 className="mb-3">My search history</h2>
            <h4>User: {user.username}</h4>
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