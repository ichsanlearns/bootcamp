import { useEffect, useState } from "react";

export default function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [userData, setUserData] = useState(() => {
    const savedData = sessionStorage.getItem("userData");

    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return { name: "", email: "" };
    }
  });

  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify({ userData }));
  }, [userData]);

  return (
    <main>
      <h1>Session Form</h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(event) => {
            setUserData({ ...userData, name: event.target.value });
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={(event) => {
            setUserData({ ...userData, email: event.target.value });
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
