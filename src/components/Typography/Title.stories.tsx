import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Title, TitleProps } from "./Title";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Title",
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    children: "The Quick Brown Fox Jumped Over The Lazy Dog",
  },
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: TitleProps) => <Title {...args} />;

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
};
