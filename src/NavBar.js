import imgLogo from "./assets/images/ironhack-logo.svg";
import menuLogo from "./assets/images/menu-top.svg";

function NavBar() {
    return (
    <div className="d-flex justify-content-between w-100">
        <img class="imgLogo" src={imgLogo} alt="ironhack logo"/>
        <img class="menuLogo" src={menuLogo} alt ="menu logo"/>
    </div>
    )
};

export default NavBar;
