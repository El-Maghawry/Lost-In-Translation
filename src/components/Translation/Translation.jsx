import { useState } from "react";
import { useDispatch } from "react-redux";
import {userSetHistoryAction} from "../../store/actions/userActions"
import '../../App.css';


const Translation = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [isListShow, setIsListShow] = useState(false);
    const translation = [[]];

    searchTerm.split("").forEach((letter) => {
            translation[0].push(<img key="{}" src={`./LostInTranslation_Resources/individial_signs/${letter}.png`} alt="" /> )
        })

// input for translation
    const handleTranslation = (event) =>  {
        setIsListShow(state => false);
        setSearchTerm(event.target.value)
         }
    
//    When translation button is pressed
    const handle = () =>  {
        setIsListShow(state => true);
        dispatch(userSetHistoryAction(searchTerm));
    }


    return (
        <div>
            <h1 className="mt-3 mb-1">Translation Page</h1>
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
        );

    }

export default Translation;