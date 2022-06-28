import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Conclusion, ConclusionProps } from "./Conclusion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Conclusion",
  component: Conclusion,
  args: {
    children: "The Quick Brown Fox Jumped Over The Lazy Dog",
  },
} as ComponentMeta<typeof Conclusion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: ConclusionProps) => <Conclusion {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};
