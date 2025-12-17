import { Link } from "react-router";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <header className="mt-15 large-container flex justify-between font-space-grotesk items-center">
      <Link to="/">
        <img src="logo-black.png" alt="" className="w-55" />
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        <Navbar fontSize={20} color="black" />

        <button className="text-[20px] border border-black rounded-[14px] py-5 px-8.75">
          Request a quote
        </button>
      </div>

      <GiHamburgerMenu className="block lg:hidden" />
    </header>
  );
}

export default Header;
