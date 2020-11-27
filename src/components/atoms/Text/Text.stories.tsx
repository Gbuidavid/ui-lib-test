import React from "react";
import Text from "./Text";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "atoms/Text",
  component: Text,
  argTypes: {
    children: {
      name: "children",
      type: { name: "string", required: false },
      defaultValue: "Default",
      description: "Text value",
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

export const Default = (props: any) => <Text>{props.children}</Text>;
