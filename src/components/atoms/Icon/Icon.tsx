import React from "react";
import IconStyled from "./Icon.styled";

interface IconProps {
  iconUrl: string;
  rotation: string;
}

/**
 * Icon
 * @param {string}  iconUrl     -Icon Url
 * @param {string}  rotation -rotation up|down
 */
const Icon: React.FC<IconProps> = ({ iconUrl, rotation }) => {
  return (
    <IconStyled rotation={rotation} aria-hidden="true">
      {iconUrl}
    </IconStyled>
  );
};

export default Icon;
