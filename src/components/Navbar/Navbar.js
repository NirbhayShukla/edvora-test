import React from "react";
import "./Navbar.css";

function Navbar({ user }) {
  return (
    <div className="navbar section__padding">
      <h1 className="navbar__logo">Edvora</h1>
      <div className="navbar__user">
        <h3 className="navbar__name">{user.name}</h3>
        <div className="navbar__img">
          <img src={user.url} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
