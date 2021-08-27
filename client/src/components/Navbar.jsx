import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/new"> Add new Activity</Link>
    </nav>
  );
}
export default Navbar;
