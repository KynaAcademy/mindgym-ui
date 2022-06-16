import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Title, TitleProps } from "./Title";
import { Highlight } from "./Highlight";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Highlight",
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    children: "Quick Brown Fox",
  },
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: TitleProps) => (
  <Title>
    The <Highlight {...args} /> Jumped Over The Lazy Dog
  </Title>
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
