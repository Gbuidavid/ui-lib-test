import React from "react";

import { AccordionListConfig, AccordionMeta } from "../../../App";
import AccordionList from "./AccordionList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "organisms/AccordionList",
  component: AccordionList,
};

const AccordionData: AccordionMeta[] = [
  {
    id: 0,
    disabled: true,
    title: "Desactivado",
  },
  { id: 1, content: " Hola N2", title: "Activado 1" },
  { id: 2, content: <div> Hola N3</div>, title: "Activado 2" },
  { id: 3, content: "Hola N3", title: "Activado 3" },
];
const AC_CONFIG: AccordionListConfig = { onlyOneOpen: false };

export const FirstDisabled = () => (
  <AccordionList items={AccordionData} config={AC_CONFIG}></AccordionList>
);
