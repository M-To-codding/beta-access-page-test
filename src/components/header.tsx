import React from "react";
import {Link} from "react-router-dom";
import {deleteCookie} from "../utils/cookiesHandlers";


interface HeaderProps {
  auth: boolean
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
        <a href="/" onClick={() => deleteCookie('auth_token')}>Logout</a>
      </section>
      : <></>}
  </header>;
}

export default Header;