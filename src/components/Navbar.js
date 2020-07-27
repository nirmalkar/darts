import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { drawerVisible } from "../appRedux/action/drawerActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDrawerVisible } = useSelector((state) => state.drawerVisible);

  const handleDrawerVisible = () => {
    dispatch(drawerVisible(!isDrawerVisible));
  };
  return (
    <section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand"></div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
        </div>
        <span onClick={handleDrawerVisible} className="mr-5 mt-2">
          <i className="fas fa-bars fa-lg" />
        </span>
      </nav>
    </section>
  );
};

export default Navbar;
