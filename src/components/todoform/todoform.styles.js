import { css } from "@emotion/core";

export const addInput = ({ theme }) =>
  css`
    background: unset;
    border: unset;
    padding: 0px 64px;
    width: 100%;
    //flex: 1;

    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;

    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
  `;
