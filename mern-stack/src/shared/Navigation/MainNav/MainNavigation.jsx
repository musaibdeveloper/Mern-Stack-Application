import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import NavLinks from "../NavLink/NavLinks";
import SideDrawer from "../SideBar/SideDrawer";
import "./MainNavigation.css";
import Backdrop from "../../components/Back/Backdrop";

export default function MainNavigation() {
  const [draweropen, setdraweropen] = useState(false);

  const opnetheDrawerHandler = () => {
    setdraweropen(true);
  };

  const closeDrawerHandler = () => {
    setdraweropen(false);
  };
  return (
    <React.Fragment>
      {draweropen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={draweropen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks></NavLinks>
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={opnetheDrawerHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}
