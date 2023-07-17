import { Link } from "react-router-dom"
import { Header } from "./Header"
import { Login } from "./Login"


export const Nav = () => {
    return (
        <div className="nav">
            <Header/>
            <div className="nav-bar">
            <Link to="/articles" className="nav-bar-link">Articles</Link>
            <Link to="/login" className="nav-bar-link">Login</Link>
            </div>
        </div>
    )
}