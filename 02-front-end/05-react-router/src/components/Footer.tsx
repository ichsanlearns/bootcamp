import { Link } from "react-router";

import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="large-container bg-black rounded-t-[45px] pt-[55px] pb-[50px] px-[60px] font-space-grotesk">
      <div className="flex justify-between items-center">
        <img src="logo-white.png" alt="" />
        <Navbar fontSize={18} color="white" />
        <ul className="flex gap-5">
          <li>
            <Link to="https://linked.com">
              <img src="linkedin-icon.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://facebook.com">
              <img src="facebook-icon.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://x.com">
              <img src="twitter-icon.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
