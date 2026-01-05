import { useEffect, useState } from "react";

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function App() {
  const [users, setUsers] = useState<IUsers[] | null>(null);

  useEffect(() => {
    async function getAllUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setUsers(data);
    }

    getAllUser();
  }, []);

  return (
    <main>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
