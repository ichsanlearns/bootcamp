import { Outlet } from "react-router-dom";
import Container from "../components/container";
import Navbar from "../components/navbar";
export default function MainLayout() {
  return (
    <main className="w-full mx-auto mt-[80px] ">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
