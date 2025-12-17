import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <Header />
      <main className="large-container min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
