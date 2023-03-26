import { NavLink } from "react-router-dom";


export default function Navbar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
return (
    <div className="navBar">
        <div className="pokeLogo">
            <img src="http://www.pngmart.com/files/2/Pokeball-PNG-Image.png" alt="pokelogo"/>
        </div>
        <div className="rutas">
            <NavLink className={ setActiveClass } to="/">
                Home
            </NavLink>
            <NavLink className={ setActiveClass } to="/pokemones">
                Pokemones
            </NavLink>
        </div>
    </div>
);
}