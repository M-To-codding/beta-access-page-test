import React from "react";
import {Link} from "react-router-dom";
import Loader from "../../components/loader";


interface UsersListProps {
  usersList: Array<IUser>;
  loading: boolean;
  error: any
}

function UsersList(props: UsersListProps) {

  function stopLinkPropagation(event: any) {
    event.stopPropagation();
  }

  if(props.error != null) {
    return <section className="-padding-top80">{props.error.message}</section>;
  }

  let list = props.usersList.map((item: IUser, index: number) => {
    return <>
      <li key={item.id} className="users-list-item">
        <Link to={`/users/${item.id}`} className="user-item-link">

          <section className="list-item-image">
            <img src={item.photo?.thumbnail} alt=""/>
          </section>

          <section className="list-item-text">
            <section className="row">
              <h3 className="initials">
                {item.name} {item.surname},
              </h3>
              &nbsp;
              <h6 className="email">
                <a href={"mailto:" + item.email} onClick={(event: any) => stopLinkPropagation(event)}>
                  {item.email}
                </a>
              </h6>
            </section>

            <a href={"tel:" + item.phone} className="phone -newLine"
               onClick={(event: any) => stopLinkPropagation(event)}>
              {item.phone}
            </a>
          </section>
        </Link>
        <hr className="-opacity50"/>
      </li>

    </>
  });

  if (props.loading) {
    return <section className="-padding-top80">
      <Loader/>
    </section>;
  }

  return <section className="container users-list-container">
    <ul className="users-list">
      {list}
    </ul>
  </section>;
}

export default UsersList;