import { useState, useEffect } from "react";
import '../../App.css';

const Profile = () => {

    return ( <div>
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
 
export default Profile;