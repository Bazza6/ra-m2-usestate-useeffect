import React from "react";
import { colors } from "../../styles/colors";
import { dimensiones } from "../../styles/dimensions";

export const Title = ({
  children,
  color = colors.font.headings,
  fontSize = dimensiones.font.h1,
}) => {
  return <h1 style={{ color, fontSize }}>{children}</h1>;
};
