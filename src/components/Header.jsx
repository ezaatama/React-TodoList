import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToogle }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToogle}>
        Add
      </button>
      <h1 className="header-title">Todo</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired
};

export default Header;
