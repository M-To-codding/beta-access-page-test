import React from "react";
import {Link} from "react-router-dom";


function Header() {
  return <header className="header">
    <Link to="/">
      <h3>
        Header
      </h3>
    </Link>
  </header>;
}

export default Header;