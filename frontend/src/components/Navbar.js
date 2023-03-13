import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navStyle">
            <Link to="/" className="site-title"> Opportunity Board</Link>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
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