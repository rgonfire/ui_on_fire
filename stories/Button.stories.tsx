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
  text: "Ver ahora",
  theme: "lightPrimary",
  size: "medium",
  round: "sm",
  iconLeft: "",
  iconRight: "",
  alt: "",
  disabled: false,
  type: "button",
};

Secondary.args = {
  text: "Ver ahora",
  theme: "lightPrimary",
  size: "medium",
  round: "sm",
  iconLeft: "",
  iconRight: "",
  alt: "",
  disabled: false,
  type: "button",
};

Tertiary.args = {
  text: "Ver ahora",
  theme: "lightPrimary",
  size: "medium",
  round: "sm",
  iconLeft: "",
  iconRight: "",
  alt: "",
  disabled: false,
  type: "button",
};
