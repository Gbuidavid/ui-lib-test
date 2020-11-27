import React, { useState } from "react";
import { AccordionMeta, AccordionListConfig } from "../../../App";
import Accordion from "../../molecules/Accordion/Accordion";
import AcStyled from "./AccordionList.styled";

export interface AccordionListProps {
  items: AccordionMeta[];
  config: AccordionListConfig;
}

/**
 * Accordion List
 * @param {AccordionMeta[]} items -Accordion items array
 */
const AccordionList: React.FC<AccordionListProps> = ({ items, config }) => {
  const [itemsData, setItems] = useState(items);

  const handleToggleItem = (index: number) => {
    const newItems = itemsData.map((item) => {
      if (config.onlyOneOpen) {
        if (item.id !== itemsData[index].id) return { ...item, isOpen: false };
        return { ...item, isOpen: !item.isOpen };
      }
      if (item.id === itemsData[index].id)
        return { ...item, isOpen: !item.isOpen };
      return { ...item };
    });

    setItems(newItems);
  };

  return (
    <AcStyled>
      {itemsData.map((item, i) => {
        return (
          <Accordion
            key={item.id}
            id={item.id}
            isOpen={item.isOpen}
            disabled={item.disabled}
            title={item.title}
            content={item.content}
            handleToggleItem={() => handleToggleItem(i)}
          />
        );
      })}
    </AcStyled>
  );
};

export default AccordionList;
