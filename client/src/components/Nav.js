import { Link } from "react-router-dom";
import "./Nav.css";

let Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Display users</Link>
      <Link to="/add">Add user</Link>
      <Link to="/edit">Edit users</Link>
      <Link to="/del">Delete user</Link>
    </div>
  );
};

export default Nav;
