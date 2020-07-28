import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { drawerVisible } from "../appRedux/action/drawerActions";
import Img from "../assets/dart.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDrawerVisible } = useSelector((state) => state.drawerVisible);

  const handleDrawerVisible = () => {
    dispatch(drawerVisible(!isDrawerVisible));
  };
  return (
    <section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item ml-5">
            <img src={Img} alt="dart" />
          </span>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start"></div>
        </div>
        <span onClick={handleDrawerVisible} className="mr-5 mt-2">
          <i className="fas fa-bars fa-lg" />
        </span>
      </nav>
    </section>
  );
};

export default Navbar;
