import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NavMenu from "../navMenu/navMenu";
import SocialLinks from "../socialLinks";
import Header from "./header";


interface HeaderProps {
  auth: boolean,
  logOut: any
}

function HeaderContainer(props: HeaderProps) {

  const [isNavCollapsed, setCollapseNav] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 140) {
      if (!isNavCollapsed) {
        setCollapseNav(true);
      }
    } else {
      // if (isNavCollapsed) {
      setCollapseNav(false);
      // }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', () => {
      })
    }
  }, []);

  return <Header auth={props.auth} logOut={props.logOut} isNavCollapsed={isNavCollapsed}/>
}

export default HeaderContainer;