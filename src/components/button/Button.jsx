/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";
//import cx from "classnames";

//import styles from "./button.module.css";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  /*const className = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color"
  ].join(" ");*/

  const theme = useTheme();

  //  const className = cx(styles.headerBtn, {
  //    [styles.mainBlackColor]: color === "black",
  //    [styles.mainRedColor]: color === "red"
  //  });

  return (
    //<button className={className} onClick={onClick}>
    //{text}
    //</button>
    <button css={styles.button({ align, color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
