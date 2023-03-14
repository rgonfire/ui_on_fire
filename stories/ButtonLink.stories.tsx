/**
 * Configuration of button link stories view (doc)
 */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLink from "../src/components/Buttons/ButtonLink";

export default {
  title: "Components/Buttons/ButtonLink",
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

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
  link: "http://google.com",
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
  link: "http://google.com",
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
  link: "http://google.com",
};
