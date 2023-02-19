import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../src/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  children: "Press Button",
  color: "primary",
  size: "small",
};

Secondary.args = {
  children: "Press Button",
  color: "secondary",
  size: "regular",
};
