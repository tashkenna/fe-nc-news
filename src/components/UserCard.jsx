export const UserCard = (props) => {
const {name, username, avatar_url} = props

return (

<div className="card"> 
    <h2>{username}</h2>
    <p>{name}</p>
    <img className="user-image" src={avatar_url} alt={`${username}'s avatar`}/>
    </div>
    )
 
}