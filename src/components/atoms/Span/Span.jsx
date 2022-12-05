import React from "react";
import { colors } from "../../../styles/colors";
import { dimensiones } from "../../../styles/dimensions";

export const Span = ({
  children,
  color = colors.font.base,
  fontSize = dimensiones.font.base,
}) => {
  return <span style={{ color, fontSize }}>{children}</span>;
};
