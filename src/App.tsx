import React, { ReactNode } from "react";
import Text from "./components/atoms/Text/Text";
import AccordionList from "./components/organisms/AccordionList/AccordionList";

export interface AccordionMeta {
  id: number;
  isOpen?: boolean;
  disabled?: boolean;
  content?: ReactNode;
  title: string;
}

export interface AccordionListConfig {
  onlyOneOpen: boolean;
}

const AC_CONFIG: AccordionListConfig = { onlyOneOpen: true };
const ACCORDION_DATA: AccordionMeta[] = [
  {
    id: 0,
    isOpen: false,
    disabled: true,
    content: "Desactivado",
    title: "Desactivadooooo titulo",
  },
  { id: 1, isOpen: false, content: " Hola N2", title: "N2" },
  { id: 2, isOpen: false, content: <Text> Hola N3</Text>, title: "N3" },
  { id: 3, isOpen: false, disabled: true, content: "Hola N3", title: "N4" },
  { id: 4, isOpen: false, content: <Text> Hola N5</Text>, title: "N5" },
];

function App() {
  return (
    <AccordionList items={ACCORDION_DATA} config={AC_CONFIG}></AccordionList>
  );
}

export default App;
