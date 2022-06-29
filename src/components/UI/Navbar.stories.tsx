import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Navbar } from "./Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    transparent: true,
    darkBackground: false,
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "Blog" },
      { href: "#", label: "About" },
    ],
  },
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};

export const Opaque = Template.bind({});
Opaque.args = {
  transparent: false,
};
