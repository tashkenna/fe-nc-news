import { Link } from "react-router-dom"
import { Header } from "./Header"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export const Nav = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="nav">
            <Header/>
            <div className="nav-bar">
            <Link to="/articles" className="nav-bar-link">articles</Link>
            {user.length > 0 ? (<Link to="/login" className="nav-bar-link">logged in as {user}</Link>) : (<Link to="/login" className="nav-bar-link">login</Link>)}
            
            </div>
        </div>
    )
}