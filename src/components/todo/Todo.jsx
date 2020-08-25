/** @jsx jsx */
import { jsx } from "@emotion/core";
//import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import * as styles from "./todo.styles";
//import styles from "./todo.module.css";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();
  return (
    <div css={styles.todo({ theme })} onClick={() => completeTodo(index)}>
      <span css={styles.todoText({ theme, isCompleted })}>{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
