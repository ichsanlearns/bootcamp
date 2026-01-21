import { useEffect, useState } from "react";
import type { IUser } from "../types/user.type";

function Home() {
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "GET",
        });
        const data = await response.json();

        setUsers(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUsers();
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
      {users ? (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading user data...</p>
      )}
    </main>
  );
}

export default Home;
