import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToogle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToogle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
