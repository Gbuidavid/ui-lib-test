import React from "react";
import TextStyled from "./Text.styled";

interface TextProps {
  isTitle?: boolean;
}

/**
 * Text
 * @param {string} isTitle     -Flag
 */
const Text: React.FC<TextProps> = ({ isTitle, children }) => {
  return <TextStyled isTitle={isTitle}>{children}</TextStyled>;
};

export default Text;
