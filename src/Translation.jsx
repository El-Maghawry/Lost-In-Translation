import { useState, useEffect } from "react";
// import a from './LostInTranslation_Resources/individial_signs/a.png'
// import b from './LostInTranslation_Resources/individial_signs/b.png'
// import c from './LostInTranslation_Resources/individial_signs/c.png'
// import d from './LostInTranslation_Resources/individial_signs/d.png'
// import e from './LostInTranslation_Resources/individial_signs/e.png'


const Translation = () => {
    
    // const [translation, setTranslation] = useState([]);
    const [translation, setTranslation] = useState('');
    const letters = translation.split("");
    const list = [];
    console.log(letters)
    // console.log(translation)
    letters.forEach((letter) => {
        list.push(<img src={`./LostInTranslation_Resources/individial_signs/${letter}.png`} alt="" /> )
        
      })

    

    const handleTranslation = (event) =>  {
        setTranslation(event.target.value);
         }

    const handle = () =>  {
        // <img src={a} alt="" />
        console.log(translation) 
        
    }
    // 


        return (
            <div>
                <h1>Translation Page</h1>
                <form>
                    <fieldset>
                        <legend> Insert text to translate to sign-language </legend>
                        <input
                        type="text"
                        onChange={ handleTranslation }
                        
                        placeholder="E.g. How are you?" />
                    </fieldset>
                </form>
                
                <div>
                    <p>{translation}</p>
                </div>
                <button onClick={ handle }>Show Translation</button>
                
                {list}
                
            </div>
            );

        }

export default Translation;