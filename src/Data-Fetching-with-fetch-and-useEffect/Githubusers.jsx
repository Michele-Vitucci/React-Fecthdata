import { useState } from "react";
import GithubUser from "./Githubuser";

function GithubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={() => setUsers([...users, username])}>Cerca</button>
      {users.map((user, i) => (
        <GithubUser key={i} username={user} />
      ))}
    </div>
  );
}

export default GithubUsers;
