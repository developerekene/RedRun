import { Avatar } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="mainNav">
      <div className="leftDiv">
        <a className="leftDivA" href="/">RedRun</a>
      </div>
      <ul className="centerUl">
        <li className="centerLi">
          <a className="centerA" href="/marketPlace">
            Market Place
          </a>
        </li>
        <li className="centerLi">
          <a className="centerA" href="/store">Store</a>
        </li>
        <li className="centerLi">
          <a className="centerA" href="/aboutus">About us</a>
        </li>
        <li className="centerLi">
          <a className="centerA" href="/contact">Contact</a>
        </li>
      </ul>

      <ul className="rightUl">
        <li className="rightLi">
          <a className="rightA" href="/login">Join us Today</a>
        </li>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        {/* <li><a>Pro</a></li> */}
      </ul>
    </div>
  );
};

export default Navbar;
