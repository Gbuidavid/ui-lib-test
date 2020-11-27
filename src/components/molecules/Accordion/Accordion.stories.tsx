import React from "react";
import Accordion, { AccordionProps } from "./Accordion";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "molecules/Accordion",
  component: Accordion,
  argTypes: {
    title: {
      name: "title",
      type: { name: "string", required: false },
      defaultValue: "Default",
      description: "Title value",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Default" },
      },
      control: {
        type: "text",
      },
    },
  },
};

export const Open = (props: AccordionProps) => (
  <Accordion
    isOpen={true}
    title={props.title}
    handleToggleItem={null}
    id={0}
    content={"Contenido"}
  ></Accordion>
);

export const Closed = () => (
  <Accordion title={"Cerrado"} handleToggleItem={null} id={0}></Accordion>
);

export const Disabled = () => (
  <Accordion
    disabled={true}
    title={"Deshabilitado"}
    handleToggleItem={null}
    id={0}
  ></Accordion>
);
