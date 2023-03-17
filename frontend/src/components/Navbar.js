import { Link, useMatch, useResolvedPath } from "react-router-dom";
import WebsiteLogo from "../icons/reach_4_the_clouds_logo.png";

export default function Navbar() {
    return (
        <nav className="navStyle">

            <Link to="/home" ><img src={WebsiteLogo} alt='Website Logo' /></Link>

            <ul>
                <CustomLink className="pageLinks" to="/home">Home</CustomLink>

                <CustomLink className="pageLinks" to="/profile">Profile</CustomLink>
            </ul>


        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }); // end: true to make sure whole path matches

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    );
}