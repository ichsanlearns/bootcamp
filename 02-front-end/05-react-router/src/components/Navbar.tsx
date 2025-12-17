import { Link } from "react-router";

function Navbar(props: { fontSize: number; color: string }) {
  return (
    <nav>
      <ul
        style={{ color: props.color, fontSize: props.fontSize }}
        className={`flex gap-10 `}
      >
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/use-cases">Use Cases</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
