import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex bg-dark text-white px-5 py-3 gap-5">
      <Link to={"/"}>Home</Link>
      <Link to={"/user"}>User</Link>
    </div>
  );
};

export default Header;
