import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import AcHeaderStyled from "./AccordionHeader.styled";

interface AccordionHeaderProps {
  isOpen: boolean;
  handleToggleItem: any;
  disabled?: boolean;
}

/**
 *
 * @param {boolean}  isOpen          - Accordion open flag
 * @param {function}  handleToggleItem    - Click callback
 * @param {boolean}  disabled          - Accordion disabled flag
 */
const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  isOpen,
  handleToggleItem,
  children,
  disabled,
}) => {
  return (
    <AcHeaderStyled
      isOpen={isOpen}
      onClick={handleToggleItem}
      disabled={disabled}
      aria-expanded={isOpen ? "true" : "false"}
    >
      <Text isTitle={true}>{children}</Text>
      <Icon iconUrl={">"} rotation={isOpen ? "up" : "down"}></Icon>
    </AcHeaderStyled>
  );
};

export default AccordionHeader;
