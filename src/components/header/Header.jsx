import React from "react";
import PropTypes from "prop-types";

import styles from "./header.module.css";
import Button from "../button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      {/*<button className="header-btn" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
  </button>*/}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo Lists</h1>
      {/*<button className="header-btn clear" onClick={clearTodos}>
        Clear
      </button>*/}
      <Button text="Clear" onClick={clearTodos} />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
