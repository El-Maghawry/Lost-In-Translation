import { useState, useEffect } from "react";
import './App.css';


const Translation = () => {
    const [translation, setTranslation] = useState('');
    const [historyTranslation, addToHisotry]= useState(["Hello!"]);
    const list = [];
    const historySearch = [];
    
    historyTranslation.slice(-1)[0].split("").forEach((letter) => {
            list.push(<img src={`./LostInTranslation_Resources/individial_signs/${letter}.png`} alt="" /> )
            
        })

    for (let i = 0; i < 5; i++) {
        historySearch.push([list])
        text += "The number is " + i + "<br>";
        }

// input for translation
    const handleTranslation = (event) =>  {
        setTranslation(event.target.value)
         }
    
//    When translation button is pressed
    const handle = () =>  {
        addToHisotry([...historyTranslation, translation])
        console.log(historyTranslation)
        
    }

    useEffect(() => {
        // console.log('use effect ran');
    }, [historyTranslation])


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
            
            <button button className="btn btn-primary btn-lg mb-4"  
            onClick={ handle }>Show Translation</button>
            <div>
                {list}
                
            </div>
            <h6>{historyTranslation.slice(-1)}</h6>

            <div className="vstack">
                {historyTranslation}
            </div>
            
            
            
        </div>
        );

    }

export default Translation;