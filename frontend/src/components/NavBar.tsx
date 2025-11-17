import { NavLink } from "react-router-dom";
import { getNavLinkClassName } from "../utils/getNavLinkClassName";
function NavBar() {
    return (
        <nav className="nav" >
            <ul className="navbar d-flex justify-content-evenly w-100 list-unstyled gap-0 gap-md-1 gap-lg-4 gap-xl-5">
                    {/* Area to drop quick notes only viewable by me */}
                <li className="nav-item mb-2 mb-md-0">
                    <NavLink className={getNavLinkClassName} to="/quick-notes">
                        Quick Note
                    </NavLink>
                </li>
                <li className="nav-item mb-2 mb-md-0">
                    <NavLink className={getNavLinkClassName} to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item mb-2 mb-md-0">
                    <NavLink className={getNavLinkClassName} to="/essays">
                        Essays
                    </NavLink>
                </li>
                <li className="nav-item mb-2 mb-md-0">
                    <NavLink className={getNavLinkClassName} to="/vault">
                        Vault
                    </NavLink>
                </li>
                    {/* Main place to write and orgainze notes, label quick notes ect, likely only viewable by me */}
                <li className="nav-item mb-2 mb-md-0">
                    <NavLink className={getNavLinkClassName} to="/input">
                        Data Input
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar