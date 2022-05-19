import React from "react";
import "./MainStyle.js";
import { Main as MainWrapper } from "./MainStyle";

const Main = (props) => {
  return <MainWrapper>{props.children}</MainWrapper>;
};

export default Main;
