import {Link} from 'react-router-dom'

function NotFoundView(){

    return(
        <main>
            <h3>Oops! Made a wrong turn there....</h3>
            <p>This page doesn't exist</p>
            <Link to="/">Take me home</Link>
        </main>
    )
}

export default NotFoundView