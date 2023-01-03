import "twin.macro";

import { ComponentMeta } from "@storybook/react";
import { Logo } from "./Logo";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Branding/Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    mono: false,
    darkBackground: false,
    variant: "default",
  },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div tw="w-96 dark:text-white">
    <Logo {...args} />
  </div>
);

export const Mindgym = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mindgym.args = {};

export const MonoMindgym = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MonoMindgym.args = {
  mono: true,
};

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {
  variant: "horizontal",
};

export const MonoHorizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MonoHorizontal.args = {
  variant: "horizontal",
  mono: true,
};

export const PreHorizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PreHorizontal.args = {
  variant: "pre-horizontal",
};

export const MonoPreHorizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MonoPreHorizontal.args = {
  variant: "pre-horizontal",
  mono: true,
};

export const Dots = Template.bind({});
Dots.args = {
  variant: "dots",
};

export const MonoDots = Template.bind({});
MonoDots.args = {
  variant: "dots",
  mono: true,
};
