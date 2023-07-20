import { useState } from "react"

export const Login = () => {
    const [user, setUser] = useState("")

    return <div> 
    <form>
    <input value={user} id="username" className="input-box" placeHolder="username"></input>
    <button>Login</button>
    </form>
    </div>
}

