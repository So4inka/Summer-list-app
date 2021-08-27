import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header">
      <Link className="one" to="/">
        Home
      </Link>
      <Link className="two" to="/new">
        {" "}
        Add new to the List
      </Link>
    </nav>
  );
}
export default Navbar;
