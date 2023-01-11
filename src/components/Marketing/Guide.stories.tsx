import { AcademicCapIcon } from "@heroicons/react/solid";
import { ComponentMeta } from "@storybook/react";
import { Guide } from "./Guide";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Marketing/Guide",
  component: Guide,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    title: "How to get ahead in life?",
    items: [
      "Don't procrastinate",
      "Save for a rainy day",
      "Use your common sense and don't make sentences that are way too long",
    ],
    bullit: "numbers",
  },
} as ComponentMeta<typeof Guide>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Guide {...args} />;

export const DefaultNumbered = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultNumbered.args = {};

export const Checks = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checks.args = {
  bullit: "checks",
};

export const CustomBullit = Template.bind({});
CustomBullit.args = {
  bullit: <AcademicCapIcon className="w-8 h-8 text-lime-600" />,
};
