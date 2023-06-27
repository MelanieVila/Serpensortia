import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="nav__container sombra">
                <img src={logo} className="logo__imagen" alt="Logo" />
                <div>
                    <a href="/">Suéteres</a> ♦ <a href="/">Bufandas</a> ♦ <a href="/">Túnicas</a> ♦ <a href="/">Corbatas</a> ♦ <a href="/">Varitas</a>
                </div>
                <div><CartWidget /></div>
            </div>
        </nav>
    )
}

export default NavBar;