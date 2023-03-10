/**
 * Configuration of navbar stories view (doc)
 */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavbarA from "../src/components/Navbars/NavbarA";

export default {
  title: "Components/Navbars",
  component: NavbarA,
} as ComponentMeta<typeof NavbarA>;

const Template: ComponentStory<typeof NavbarA> = (args) => (
  <NavbarA {...args} />
);

export const A = Template.bind({});

A.args = {
  children: "Navbar",
};
