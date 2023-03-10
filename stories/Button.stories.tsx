/**
 * Configuration of buttons stories view (doc)
 */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../src/components/Buttons/Button";

export default {
  title: "Components/Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  text: "Ver ahora",
  theme: "darkPrimary",
  width: "medium",
  height: "medium",
  round: "sm",
  iconLeft: "",
  iconRight: "",
  alt: "",
  disabled: false,
  type: "button",
};

Secondary.args = {
  text: "Ver ahora",
  theme: "darkSecondary",
  width: "medium",
  height: "medium",
  round: "sm",
  iconLeft: "",
  iconRight: "",
  alt: "",
  disabled: false,
  type: "button",
};

Tertiary.args = {
  text: "Ver ahora",
  theme: "darkTertiary",
  width: "medium",
  height: "medium",
  round: "sm",
  iconLeft: "",
  iconRight: "",
  alt: "",
  disabled: false,
  type: "button",
};
