import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { email, clearEmail } = useAuthStore();
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between fixed top-0 left-0 w-full h-[80px] bg-white shadow-md flex items-center px-4 z-10">
      <h1 className="font-bold text-xl">MyApp</h1>
      <div>
        {email ? (
          <div className="flex gap-5">
            <span>Welcome {email}</span>
            <button onClick={clearEmail}>Logout</button>
          </div>
        ) : (
          <div className="flex gap-5">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        )}
      </div>
    </nav>
  );
}
