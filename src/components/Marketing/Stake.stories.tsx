import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Stake, StakeProps } from "./Stake";
import { Highlight } from "../Typography/Highlight";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Marketing/Stake",
  component: Stake,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      description: "The main title",
      type: { name: "string", required: true },
    },
    subtitle: {
      name: "subtitle",
      type: { name: "string", required: false },
      description: "Optional subtitle text",
    },
    // primaryCTA: {
    //   description: "The primary CTA",
    //   type: {
    //     name: "other",
    //     required: true,
    //     value: `{
    //       href: "/join"
    //       label: "Join the Beta"
    //     }`,
    //   },
    // },
    // secondaryCTA: {
    //   description: "Optional Secondary CTA",
    //   type: {
    //     name: "other",
    //     required: false,
    //     value: `{
    //       href: "/share"
    //       label: "Share"
    //     }`,
    //   },
    // },
  },
  args: {
    title: "You Should Take Care of Your Students, Not Your Materials",
    subtitle: "Focus on what makes your school unique",
    // primaryCTA: {
    //   href: "/join",
    //   label: "Join the Beta",
    // },
  },
} as ComponentMeta<typeof Stake>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: StakeProps) => <Stake {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const WithHighlight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithHighlight.args = {
  title: (
    <>
      You should take care of your students,{" "}
      <Highlight>not your materials</Highlight>.
    </>
  ),
};

export const WithImageAndHighlight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImageAndHighlight.args = {
  title: (
    <>
      You should take care of your students,{" "}
      <Highlight>not your materials</Highlight>.
    </>
  ),
  image:
    "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=360&w=1024&q=80&crop=bottom",
};

// export const WithSecondaryCTA = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// WithSecondaryCTA.args = {
//   secondaryCTA: {
//     href: "#secondary",
//     label: "Share with a Fellow",
//   },
// };

// export const WithHeaderNavbar = Template.bind({});
// const links = [
//   { href: "#", label: "Home", active: true },
//   { href: "#", label: "Blog" },
//   { href: "#", label: "About" },
// ];
// WithHeaderNavbar.args = {
//   header: <Navbar links={links} onDarkBackground />,
// };
