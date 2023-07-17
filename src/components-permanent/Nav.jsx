import { Link } from "react-router-dom"
import { Header } from "./Header"
import { Login } from "../components-pages/Login"


export const Nav = () => {
    return (
        <div className="nav">
            <Header/>
            <div className="nav-bar">
            <Link to="/articles" className="nav-bar-link">articles</Link>
            <Link to="/login" className="nav-bar-link">login</Link>
            </div>
        </div>
    )
}