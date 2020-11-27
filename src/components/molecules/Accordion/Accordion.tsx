import React from "react";
import { AccordionMeta } from "../../../App";
import AccordionHeader from "../AccordionHeader/AccordionHeader";
import AcStyled from "./Accordion.styled";
import AcTextStyled from "./AccordionText.styled";

export interface AccordionProps extends AccordionMeta {
  handleToggleItem: any;
}

/**
 * Accordion
 * @param {boolean} isOpen      - Flag
 * @param {boolean} disabled    - Flag
 * @param {string}  title       - Accordion element title
 * @param {number}  content          - Accordion item content
 * @param {function}  handleToggleItem          - Click callback
 */
const Accordion: React.FC<AccordionProps> = ({
  isOpen = false,
  disabled = false,
  title,
  content,
  handleToggleItem,
}) => {
  return (
    <AcStyled disabled={disabled} isOpen={isOpen}>
      <AccordionHeader
        isOpen={isOpen}
        handleToggleItem={handleToggleItem}
        disabled={disabled}
      >
        {title}
      </AccordionHeader>
      {!disabled && content && (
        <AcTextStyled isOpen={isOpen}>{content}</AcTextStyled>
      )}
    </AcStyled>
  );
};

export default Accordion;
