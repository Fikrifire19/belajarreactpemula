/** @jsx jsx */
import { jsx } from "@emotion/core";
//import React from "react";
import PropTypes from "prop-types";

//import styles from "./header.module.css";
import * as styles from "./header.styles";
import Button from "../button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section css={styles.header}>
      {/*<button className="header-btn" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
  </button>*/}
      <Button
        text={showAdd ? "Finish" : "Add"}
        color="black"
        onClick={showAddToggle}
      />
      <h1 css={styles.headerTitle}>Todo Lists</h1>
      {/*<button className="header-btn clear" onClick={clearTodos}>
        Clear
      </button>*/}
      <Button text="Clear" color="red" align="right" onClick={clearTodos} />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
