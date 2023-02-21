/**
 * Configuration of buttons stories view (doc)
 */

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
export const Tertiary = Template.bind({});

Primary.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  round: "a",
  disabled: false,
};

Secondary.args = {
  children: "Button",
  color: "secondary",
  size: "medium",
  round: "a",
  disabled: false,
};

Tertiary.args = {
  children: "Button",
  color: "tertiary",
  size: "medium",
  round: "a",
  disabled: false,
};
