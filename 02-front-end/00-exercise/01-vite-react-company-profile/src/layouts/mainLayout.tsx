import { Outlet } from "react-router-dom";
import Container from "../containers/container.tsx";

export default function MainLayout() {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
