import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import api from "../api/axios";
import { AxiosError } from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    try {
      event.preventDefault();

      const res = api.post("/auth/login", { email, password });

      localStorage.setItem("accessToken", (await res).data.accessToken);

      toast.success("Login successfull");
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || "Login failed");
      }
    }
  }

  return (
    <main>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email.address@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
