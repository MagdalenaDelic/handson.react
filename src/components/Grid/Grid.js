import React from "react";
import "./Grid.scss";

const Grid = ({ modifiers, children }) => {
  const modifierClasses = {
    primary: "Grid",
    secondary: "Grid_Secondary",
  };

  let gridClass = "Grid";

  modifiers.map((modifier) => (gridClass += " " + modifierClasses[modifier]));

  return <div className={gridClass}>{children}</div>;
};

export default Grid;
