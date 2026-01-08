import { useAuthStore } from "./store/authStore";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  const email = useAuthStore((state) => state.email);

  return email ? <Home /> : <SignIn />;
}

export default App;
