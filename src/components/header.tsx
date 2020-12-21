import React from "react";
import {Link} from "react-router-dom";


interface HeaderProps {
  auth: boolean,
  logOut: any
}

function Header(props: HeaderProps) {
  return <header className="header">
    <Link to="/">
      <h3>
        Header
      </h3>
    </Link>

    {props.auth ?
      <section>
        <Link to="/users">Users </Link>
        <a href="/" onClick={() => props.logOut()}>Logout</a>
      </section>
      : <></>
    }
  </header>
}

export default Header;