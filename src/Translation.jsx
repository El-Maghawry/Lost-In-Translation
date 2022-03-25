import { useState, useEffect } from "react";
import './App.css';


const Translation = () => {
    const [translation, setTranslation] = useState('');
    const [historyTranslation, addToHisotry] = useState([]);
    const [historyDisplay, addToHistoryDisplay] = useState([]);
    const list = [[]];

    translation.split("").forEach((letter) => {
            list[0].push(<img src={`./LostInTranslation_Resources/individial_signs/${letter}.png`} alt="" /> )
        })


// input for translation
    const handleTranslation = (event) =>  {
        setTranslation(event.target.value)
         }
    
//    When translation button is pressed
    const handle = () =>  {
        addToHisotry([...historyTranslation, 
            (<div>
                {translation}
                <hr />
            </div>)
        ])
        console.log(historyTranslation)
        if (list[0] !== historyDisplay[0]){
        addToHistoryDisplay([...historyDisplay,
            (<div>
                {list[0]}
                <hr />
            </div>)
        ])
    }
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
            
            <button button className="btn btn-primary btn-lg mb-4" onClick={ handle }>Show Translation</button>
            <div>
                {/* {historyTranslation[0]} */}
                 {historyDisplay[0]}
            </div>

            

            <h2 className="mb-3">History</h2>
                            <hr></hr>
            {/* this need to go to the profile page */}
            <div className="row">
                
                <div className="column-left">
                    <h6>{historyTranslation}</h6>
                </div>
                <div className="column-right">
                    {historyDisplay}  
                </div> 
            </div>
            
            
            
        </div>
        );

    }

export default Translation;