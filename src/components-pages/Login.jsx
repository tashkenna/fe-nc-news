import { useContext, useEffect, useState } from "react";
import { getUsers } from "../api/api";
import { UserContext } from "../context/UserContext";
import { UserCard } from "../components/UserCard";


export const Login = () => {
  const [users, setUsers] = useState([]);
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);


  return (
    <div>
      <section className="login-logout">
        {user.length === 0 ? (
          <h1 className="login-text">click a user to log in</h1>
        ) : (
          <button
            className="logout-button"
            onClick={() => {
              setUser([]);
            }}
          >
            log out
          </button>

        )}

      </section>

      <section className="users-page">
        {users.map((user) => {
          return (
            <div
              onClick={() => {
                setUser(user.username);
              }}
              key={user.username}
              className="user-card"
            >
              <UserCard
                key={user.username}
                name={user.name}
                username={user.username}
                avatar_url={user.avatar_url}
                
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

