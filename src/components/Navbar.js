import React from "react";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand"></div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
