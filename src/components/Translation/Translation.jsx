import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Navigate} from 'react-router-dom'
import { userSetTranslationsAction} from "../../store/actions/userActions"
import '../../App.css';


const Translation = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [isListShow, setIsListShow] = useState(false);
    const {id, translations} = useSelector((state) => state.user)
    const {loggedIn} = useSelector((state) => state.session)
    const translation = [[]];

    searchTerm.split("").forEach((letter, index) => {
            translation[0].push(<img key="{index}" src={`./LostInTranslation_Resources/individial_signs/${letter}.png`} alt="" /> )
        })

// input for translation
    const handleTranslation = (event) =>  {
        setIsListShow(state => false);
        setSearchTerm(event.target.value)
         }

    const updatedUser = { id:id, translations: [...translations, searchTerm] };
    
//    When translation button is pressed
    const handle = () =>  {
        setIsListShow(state => true);
        dispatch(userSetTranslationsAction(updatedUser))
    }


    return (
        <>
        {!loggedIn && <Navigate to="/" replace />}
        {
            loggedIn && 
            <div>
            <form className="mb-3">
                <fieldset>
                    <legend> Insert text to translate to sign-language </legend>
                    <input
                    type="text"
                    onChange={ handleTranslation }
                    className="form-control"
                    placeholder="E.g. Hello!" />
                </fieldset>
            </form>
            
            <button className="btn btn-primary btn-lg mb-4" onClick={ handle }>Show Translation</button>
            
            {
                isListShow &&
                    <div>
                        {translation[0]}
                    </div>
            }
        </div>
        }
        </>
       
        );

    }

export default Translation;