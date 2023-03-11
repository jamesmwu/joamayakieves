import { Link, useMatch, useResolvedPath } from "react-router-dom";
import WebsiteLogo from "./icons/reach4theclouds.jpg"

export default function Navbar() {
    return (
        <nav className="navStyle">
            <Link to="/" ><img src={WebsiteLogo}/></Link>
            <ul>
                <CustomLink className="pageLinks" to="/">Home</CustomLink>
                <CustomLink className="pageLinks" to="/profile">Profile</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({to, children,...props}) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true}) // end: true to make sure whole path matches

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    );
}