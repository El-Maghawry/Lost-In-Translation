import { NavLink } from "react-router-dom";
import Translation from "../../components/Translation/Translation";

function TranslationsView(){
    return (
        <main>
        <NavLink to="/profile">Profile</NavLink>
        <Translation/>
        </main>

    )
}
export default TranslationsView

