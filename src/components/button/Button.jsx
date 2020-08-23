import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ text, onClick, color }) => {
  /*const className = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color"
  ].join(" ");*/

  const className = cx(styles.headerBtn, {
    [styles.mainBlackColor]: color === "black",
    [styles.mainRedColor]: color === "red"
  });

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"])
};

export default Button;
