/** @jsx jsx */
import { jsx } from "@emotion/core";
//import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

//import styles from "./header.module.css";
import * as styles from "./header.styles";
import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        {/*<button className="header-btn" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
  </button>*/}
        <Item flex={1}>
          <Button
            text={showAdd ? "Finish" : "Add"}
            color="black"
            onClick={showAddToggle}
          />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>
        {/*<button className="header-btn clear" onClick={clearTodos}>
        Clear
      </button>*/}
        <Item flex={1} align="right">
          <Button text="Clear" color="red" align="right" onClick={clearTodos} />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
