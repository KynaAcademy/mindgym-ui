import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Hero, HeroProps } from "./Hero";
import { Navbar } from "../UI/Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Marketing/Hero",
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    leader: {
      name: "leader",
      type: { name: "string", required: false },
      description: "Optional leader title text",
    },
    title: {
      description: "The main title",
      type: { name: "string", required: true },
    },
    follower: {
      name: "follower",
      type: { name: "string", required: false },
      description: "Optional 3rd level subtitle text",
    },
    primaryCTA: {
      description: "The primary CTA",
      type: {
        name: "other",
        required: true,
        value: `{
          href: "/join"
          label: "Join the Beta"
        }`,
      },
    },
    secondaryCTA: {
      description: "Optional Secondary CTA",
      type: {
        name: "other",
        required: false,
        value: `{
          href: "/share"
          label: "Share"
        }`,
      },
    },
  },
  args: {
    leader: "Online Courses Branded for Your Coding School to",
    title: "Offer Your Students and Teachers the Courses They Deserve",
    follower: "Pay per active use license fee.",
    primaryCTA: {
      href: "/join",
      label: "Join the Beta",
    },
  },
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: HeroProps) => <Hero {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
};

export const WithSecondaryCTA = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSecondaryCTA.args = {
  secondaryCTA: {
    href: "#secondary",
    label: "Share with a Fellow",
  },
};

export const WithHeaderNavbar = Template.bind({});
const links = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Blog" },
  { href: "#", label: "About" },
];
WithHeaderNavbar.args = {
  header: <Navbar links={links} onDarkBackground />,
};
