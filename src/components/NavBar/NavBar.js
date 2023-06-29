import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="nav__container sombra">
                <Link to="/">
                    <img src={logo} className="logo__imagen" alt="Logo" />
                </Link>

                <div className="nav__enlaces">
                    <NavLink to={"/category/sueter"}>Suéteres</NavLink> ♦ <NavLink to={"/category/bufanda"}>Bufandas</NavLink> ♦ <NavLink to={"/category/tunica"}>Túnicas</NavLink> ♦ <NavLink to={"/category/corbata"}>Corbatas</NavLink> ♦ <NavLink to={"/category/varita"}>Varitas</NavLink>
                </div>
                <div><CartWidget /></div>
            </div>
        </nav>
    )
}

export default NavBar;