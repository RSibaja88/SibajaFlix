import React, { useState, useEffect } from "react";
import netflix from "../img/netflixLogo.png";
import avatar from "../img/netflixAvatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 140) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img className="netflix" src={netflix} />
      <img className="avatar" src={avatar} />
    </div>
  );
}

export default Nav;
