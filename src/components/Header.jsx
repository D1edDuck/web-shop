import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>Header</h1>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/"}>Home</NavLink>
      <hr />
    </>
  );
}

export default Header;
