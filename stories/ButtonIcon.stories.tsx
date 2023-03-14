/**
 * Configuration of button icon stories view (doc)
 */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonIcon from "../src/components/Buttons/ButtonIcon";

export default {
  title: "Components/Buttons/ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  theme: "darkSecondary",
  width: "medium",
  height: "medium",
  round: "sm",
  iconSrc: "",
  alt: "",
};

Secondary.args = {
  theme: "darkSecondary",
  width: "medium",
  height: "medium",
  round: "sm",
  iconSrc: "",
  alt: "",
};

Tertiary.args = {
  theme: "darkTertiary",
  width: "medium",
  height: "medium",
  round: "sm",
  iconSrc: "",
  alt: "",
};
