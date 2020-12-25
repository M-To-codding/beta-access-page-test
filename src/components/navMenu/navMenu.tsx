import React from "react";
import {Link} from "react-router-dom";

interface NavMenuProps {
  auth: boolean,
  logOut: any
}

function NavMenu(props: NavMenuProps) {

  return <nav className="navbar navbar-expand navbar-light nav-menu">

    <Link to="/" className="col-lg-2 col-md-2">
      <h3>
        Home
      </h3>
    </Link>

    <section className="container d-flex align-items-center justify-content-start main-nav-content">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/store" className="d-block">Store</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="d-block">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="d-block">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="d-block">Contact us</Link>
        </li>
        {props.auth ?
          <li className="nav-item">
            <Link to="/users" className="d-block">Users</Link>
          </li>
        : null}
      </ul>

      {props.auth ?
        <ul className="navbar-nav ml-auto col-2">

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              <img width={16}
                   src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzEuMzg2NzE5IDMyNS4wMTE3MTljLTE2Ljk2ODc1LTE0LjkxMDE1Ny0zNy41NDY4NzUtMjcuNzkyOTY5LTYxLjE2Nzk2OS0zOC4yODkwNjMtMTAuMDk3NjU2LTQuNDg0Mzc1LTIxLjkxNDA2Mi4wNjI1LTI2LjM5ODQzOCAxMC4xNTYyNS00LjQ4NDM3NCAxMC4wOTM3NS4wNjI1IDIxLjkxMDE1NiAxMC4xNTYyNSAyNi4zOTg0MzggMTkuOTE3OTY5IDguODUxNTYyIDM3LjA4MjAzMiAxOS41NDI5NjggNTEuMDA3ODEzIDMxLjc4MTI1IDE3LjE2Nzk2OSAxNS4wODU5MzcgMjcuMDE1NjI1IDM2LjkyOTY4NyAyNy4wMTU2MjUgNTkuOTQxNDA2djM3YzAgMTEuMDI3MzQ0LTguOTcyNjU2IDIwLTIwIDIwaC0zOTJjLTExLjAyNzM0NCAwLTIwLTguOTcyNjU2LTIwLTIwdi0zN2MwLTIzLjAxMTcxOSA5Ljg0NzY1Ni00NC44NTU0NjkgMjcuMDE1NjI1LTU5Ljk0MTQwNiAyMC4yMDcwMzEtMTcuNzU3ODEzIDc5LjA4MjAzMS01OS4wNTg1OTQgMTg4Ljk4NDM3NS01OS4wNTg1OTQgODEuNjA1NDY5IDAgMTQ4LTY2LjM5NDUzMSAxNDgtMTQ4cy02Ni4zOTQ1MzEtMTQ4LTE0OC0xNDgtMTQ4IDY2LjM5NDUzMS0xNDggMTQ4YzAgNDcuNzA3MDMxIDIyLjY5NTMxMiA5MC4yMDcwMzEgNTcuODUxNTYyIDExNy4yODkwNjItNjQuMzI4MTI0IDE0LjE0MDYyNi0xMDQuMzQzNzUgNDEuMzU5Mzc2LTEyNS4yMzgyODEgNTkuNzIyNjU3LTI1LjgwODU5MyAyMi42NzU3ODEtNDAuNjEzMjgxIDU1LjQ3MjY1Ni00MC42MTMyODEgODkuOTg4MjgxdjM3YzAgMzMuMDg1OTM4IDI2LjkxNDA2MiA2MCA2MCA2MGgzOTJjMzMuMDg1OTM4IDAgNjAtMjYuOTE0MDYyIDYwLTYwdi0zN2MwLTM0LjUxNTYyNS0xNC44MDQ2ODgtNjcuMzEyNS00MC42MTMyODEtODkuOTg4Mjgxem0tMzIzLjM4NjcxOS0xNzcuMDExNzE5YzAtNTkuNTUwNzgxIDQ4LjQ0OTIxOS0xMDggMTA4LTEwOHMxMDggNDguNDQ5MjE5IDEwOCAxMDgtNDguNDQ5MjE5IDEwOC0xMDggMTA4LTEwOC00OC40NDkyMTktMTA4LTEwOHptMCAwIi8+PC9zdmc+"/>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

              <a href="/" onClick={() => props.logOut()}>Logout</a>
              <img width={16}
                   src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTExIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNjEuNSAzOTJ2NDBjMCA0NC4xMTMyODEtMzUuODg2NzE5IDgwLTgwIDgwaC0yMDFjLTQ0LjExMzI4MSAwLTgwLTM1Ljg4NjcxOS04MC04MHYtMzUyYzAtNDQuMTEzMjgxIDM1Ljg4NjcxOS04MCA4MC04MGgyMDFjNDQuMTEzMjgxIDAgODAgMzUuODg2NzE5IDgwIDgwdjQwYzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMHYtNDBjMC0yMi4wNTQ2ODgtMTcuOTQ1MzEyLTQwLTQwLTQwaC0yMDFjLTIyLjA1NDY4OCAwLTQwIDE3Ljk0NTMxMi00MCA0MHYzNTJjMCAyMi4wNTQ2ODggMTcuOTQ1MzEyIDQwIDQwIDQwaDIwMWMyMi4wNTQ2ODggMCA0MC0xNy45NDUzMTIgNDAtNDB2LTQwYzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwem0xMzYuMzU1NDY5LTE3MC4zNTU0NjktNDQuNzg1MTU3LTQ0Ljc4NTE1NmMtNy44MTI1LTcuODEyNS0yMC40NzY1NjItNy44MTI1LTI4LjI4NTE1NiAwLTcuODEyNSA3LjgwODU5NC03LjgxMjUgMjAuNDcyNjU2IDAgMjguMjgxMjVsMzEuODU1NDY5IDMxLjg1OTM3NWgtMjQwLjE0MDYyNWMtMTEuMDQ2ODc1IDAtMjAgOC45NTMxMjUtMjAgMjBzOC45NTMxMjUgMjAgMjAgMjBoMjQwLjE0MDYyNWwtMzEuODU1NDY5IDMxLjg1OTM3NWMtNy44MTI1IDcuODA4NTk0LTcuODEyNSAyMC40NzI2NTYgMCAyOC4yODEyNSAzLjkwNjI1IDMuOTA2MjUgOS4wMjM0MzggNS44NTkzNzUgMTQuMTQwNjI1IDUuODU5Mzc1IDUuMTIxMDk0IDAgMTAuMjM4MjgxLTEuOTUzMTI1IDE0LjE0NDUzMS01Ljg1OTM3NWw0NC43ODUxNTctNDQuNzg1MTU2YzE5LjQ5NjA5My0xOS40OTYwOTQgMTkuNDk2MDkzLTUxLjIxNDg0NCAwLTcwLjcxMDkzOHptMCAwIi8+PC9zdmc+"/>
            </div>
          </li>

        </ul>
        : <></>
      }
    </section>
  </nav>
}

export default NavMenu;